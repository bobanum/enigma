import Collection from './Collection.js';

export default class Cell {
	_state = null;
	choices = null;
	auto = false;
	name = "cell";
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
	get path() {
		return this.choices.join('-');
	}
	connect() {
		const [choice1, choice2] = this.choices;
		if (!choice1.cells.has(choice2.property.id)) {
			choice1.cells.set(choice2.property.id, new Collection());
		}
		if (!choice2.cells.has(choice1.property.id)) {
			choice2.cells.set(choice1.property.id, new Collection());
		}
		console.log(`Connect ${choice1} ${choice2}`);
	}
	strike(auto = false) {
		if (this._state === "X") return;
		if (this._state === "O") {
			throw "Cannot strike a checked cell";
		}
		this.auto = auto || false;
		this._state = "X";
		this.strikeCorrespondingToChecked(true);
	}
	check(auto = false) {
		if (this._state === "O") return;
		if (this._state === "X") {
			throw "Cannot check a striked cell";
		}
		this.auto = auto || false;
		this._state = "O";
		this.strikeNeighbours();
	}
	strikeCorrespondingToChecked() {
		let enigma = this.choices[0].property.enigma;
		let properties = enigma.properties.v().filter(p => p !== this.choices[0].property && p !== this.choices[1].property);
		this.findCorrespondingStricked(properties).forEach(cell => {
			this.choices[1].cells.get(cell.choices[1].path).strike(true);
		});
		this.findCorrespondingStricked(properties, true).forEach(cell => {
			this.choices[0].cells.get(cell.choices[0].path).strike(true);
		});

	}
	findCorrespondingStricked(properties, vertical = false) {
		const idx = vertical ? 1 : 0;
		let checked = properties.map(property => {
			return property.choices.gather((choice, key) => {
				let cell = choice.cells.get(this.choices[idx].path);
				if (cell && cell.state === "O") {
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
