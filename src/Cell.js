import Collection from './Collection.js';

export default class Cell {
	_state = null;
	choices = null;
	auto = false;
	name = "cell";
	_properties = null;
	_otherProperties = null;
	matches = [];
	constructor(choice1, choice2) {
		this.choices = [choice1, choice2];
	}
	get state() {
		return this._state;
	}
	set state(value) {
		if (value === this._state) return;
		if (value === "O") {
			this.check();
		} else if (value === "X") {
			this.strike();
		}
	}
	setState(value, auto = false) {
		if (value === "O") {
			return this.check(auto);
		} else if (value === "X") {
			return this.strike(auto);
		} else {
			return this[value](auto);
		}
	}
	get path() {
		return this.choices.join('-');
	}
	get properties() {
		if (!this._properties) {
			this._properties = this.choices.map(choice => choice.property);
		}
		return this._properties;
	}
	get otherProperties() {
		if (!this._otherProperties) {
			this._otherProperties = this.choices[0].property.enigma.properties.v().filter(p => p !== this.choices[0].property && p !== this.choices[1].property);
		}
		return this._otherProperties;
	}
	addMatch(...cells) {
		for (const cell of cells) {
			if (cell !== this && !this.matches.includes(cell)) {
				this.matches.push(cell);
			}
		}
	}
	strike(auto = false) {
		if (this._state === "X") return;
		if (this._state === "O") {
			// throw "Cannot strike a checked cell : " + this.path;
			return;
		}
		this.auto = auto || false;
		this._state = "X";
		this.matches.forEach(cell => {
			cell.strike(true);
		});
		this.checkComplete();
	}
	check(auto = false) {
		if (this._state === "O") return;
		if (this._state === "X") {
			// throw "Cannot check a striked cell : " + this.path;
			return;
		}
		this.auto = auto || false;
		this._state = "O";
		this.mergeCells();
		this.strikeNeighbours();
		this.matches.forEach(cell => {
			cell.check(true);
		});
	}
	mergeCells() {
		this.otherProperties.forEach(property => {
			console.log("Merging cells for " + property);
			for (const [id, choice] of property.choices) {
				const match1 = choice.cells.get(this.choices[0].path);
				const match2 = choice.cells.get(this.choices[1].path);
				match1.addMatch(match2);
				match2.addMatch(match1);
				if (match1.state) {
					match2.setState(match1.state, true);
				}
				if (match2.state) {
					match1.setState(match2.state, true);
				}
			}
		});
		return this;
	}
	getPrime(cell, vertical = false) {
		const idx = vertical ? 0 : 1;
		return this.choices[idx].cells.get(cell.choices[idx].path);
	}
	setCorrespondingTo(newState, correspondingState, vertical) {
		if (correspondingState === undefined) {
			this.setCorrespondingTo(newState, "O", vertical);
			this.setCorrespondingTo(newState, "X", vertical);
			return this;
		}
		if (vertical === undefined) {
			this.setCorrespondingTo(newState, correspondingState, false);
			this.setCorrespondingTo(newState, correspondingState, true);
			return this;
		}
		this.findCorresponding(correspondingState, vertical).forEach(cell => {
			const prime = this.getPrime(cell, vertical);
			prime.setState(newState, true);
			// prime.matches.forEach(match => {
			// 	// this.matches.setState(newState, true);
			// });
			if (correspondingState === "O" && newState === "O") {
				cell.addMatch(this, prime, ...this.matches);
				prime.addMatch(this, cell, ...this.matches);
			}
		});
		return this;
	}
	checkComplete(vertical) {
		if (vertical === undefined) {
			this.checkComplete(false);
			this.checkComplete(true);
			return this;
		}
		const idx = vertical ? 1 : 0;
		let [choice1, choice2] = this.choices;
		if (vertical) {
			[choice1, choice2] = [choice2, choice1];
		}
		let cells = this.gatherRow(vertical).filter(cell => cell.state !== "X");
		if (cells.length === 1) {
			cells.pop().check(true);
		}
		return this;
	}

	findCorresponding(state, vertical) {
		if (vertical === undefined) {
			return this.findCorresponding(state, false).concat(this.findCorresponding(state, true));
		}
		const idx = vertical ? 1 : 0;
		let properties = this.otherProperties;
		let checked = properties.map(property => {
			return property.choices.gather((choice, key) => {
				let cell = choice.cells.get(this.choices[idx].path);
				if (cell && cell.state === state) {
					return cell;
				}
				return;
			}).v();
		}).flat();
		return checked;
	}
	strikeNeighbours() {
		this.strikeRow();
		this.strikeRow(true);
	}
	gatherRow(vertical = false) {
		let [choice1, choice2] = this.choices;
		if (vertical) {
			[choice1, choice2] = [choice2, choice1];
		}
		const result = [];
		for (const [id, otherChoice] of choice1.property.choices) {
			if (otherChoice === choice1) continue;
			result.push(otherChoice.cells.get(choice2.path));
		}
		return result;
	}
	strikeRow(vertical = false) {
		let [choice1, choice2] = this.choices;
		if (vertical) {
			[choice1, choice2] = [choice2, choice1];
		}
		for (const [id, otherChoice] of choice1.property.choices) {
			if (otherChoice === choice1) continue;
			otherChoice.cells.get(choice2.path).strike(true);
		}
	}
	toString() {
		return this.path;
	}
}
