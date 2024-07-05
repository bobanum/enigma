import Action from './Action.js';
import Collection from './Collection.js';
import Join from './Join.js';
import Match from './Match.js';

export default class Cell {
	_state = null;
	choices = null;
	auto = false;
	name = "cell";
	_properties = null;
	_otherProperties = null;
	actions = [];
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
	get enigma() {
		return this.choices[0].enigma;
	}
	setState(value, action = null) {
		if (value === "O") {
			return this.check(action);
		} else if (value === "X") {
			return this.strike(action);
		} else {
			return this._state = null;
		}
	}
	resetState() {
		if (this._state === null) return;
		this.auto = false;
		this._state = null;
		this.matches.forEach(match => {
			match.resetState();
		});
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
	addAction(action) {
		if (this.actions.includes(action)) return;
		this.actions.push(action);
		// action.addAutoCell(this);
		return this;
	}
	removeAction(...actions) {
		// console.log(this.path, this.matches.length, actions.length);
		actions.forEach(action => {
			const pos = this.actions.indexOf(action);
			if (pos < 0) return;
			this.actions.splice(pos, 1);
			this.matches.forEach(match => {
				match.removeAction(action);
			});
		});

		if (this.actions.length === 0) {
			this.auto = false;
			// this._state = null;
			this.resetState();
		}
		return this;
	}
	strike(action = null) {
		if (this._state === "X") return;
		if (this._state === "O") {
			// throw "Cannot strike a checked cell : " + this.path;
			return;
		}
		this._state = "X";
		action = this.manageAction("notequal", action);
		this.matches.forEach(match => {
			// debugger;
			// console.log(cell.actions);
			match.setState(this._state, action);
			// let join = new Join(action, ...cell.actions);
			// join.addAction(action, ...cell.actions);
			// action.addAction(join);
			// cell.strike(join);
		});
		this.checkComplete(action);
	}
	check(action = false) {
		if (this._state === "O") return;
		if (this._state === "X") {
			// throw "Cannot check a striked cell : " + this.path;
			return;
		}
		this._state = "O";
		action = this.manageAction("equal", action);
		// debugger;
		this.mergeCells(action);
		// this.matches.forEach(cell => {
		// 	// debugger;
		// 	let join = new Action("join");
		// 	join.addAction(action, ...cell.actions);
		// 	action.addAction(join);
		// 	cell.strike(join);
		// });
		this.strikeNeighbours(action);
		// this.matches.forEach(cell => {
		// 	cell.check(action);
		// });
		// this.matches.forEach(cell => {
		// 	let a2 = new Action("join", cell);
		// 	a2.addAction(action);
		// 	cell.check(a2);
		// });
		// console.log(action.cells.length, action.autoCells.length);
		// [...action.cells, ...action.autoCells].forEach(cell => {
		// 	cell.addAction(action);
		// });
	}
	manageAction(operator, action) {
		this.auto = !!action;
		if (!action) {
			action = new Action(operator, this);
			this.enigma.addAction(action);
			this.addAction(action);
		} else {
			// action.addAutoCell(this);
		}
		return action;
	}
	mergeCells(action) {
		this.otherProperties.forEach(property => {
			console.log("Merging cells for " + property);
			for (const [id, choice] of property.choices) {
				const matches = this.choices.map(prime => choice.cells.get(prime.path));
				const match = new Match(action, ...matches);
				this.addMatch(match);
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
		return this;
	}
	checkComplete(action, vertical) {
		if (vertical === undefined) {
			this.checkComplete(action, false);
			this.checkComplete(action, true);
			return this;
		}
		const idx = vertical ? 1 : 0;
		let [choice1, choice2] = this.choices;
		if (vertical) {
			[choice1, choice2] = [choice2, choice1];
		}
		let cells = this.gatherRow(vertical).filter(cell => cell.state !== "X");
		if (cells.length === 1) {
			cells.pop().check(action);
		}
		return this;
	}

	strikeNeighbours(action) {
		this.strikeRow(action);
		this.strikeRow(action, true);
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
	strikeRow(action, vertical = false) {
		let [choice1, choice2] = this.choices;
		if (vertical) {
			[choice1, choice2] = [choice2, choice1];
		}
		for (const [id, otherChoice] of choice1.property.choices) {
			if (otherChoice === choice1) continue;
			let cell = otherChoice.cells.get(choice2.path);
			const actionPrime = new Action("ne", cell);
			cell.addAction(actionPrime);
			cell.strike(actionPrime);
			action.addAction(actionPrime);
		}
	}
	toString() {
		return this.path;
	}
}
