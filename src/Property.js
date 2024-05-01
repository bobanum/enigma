import Collection from './Collection.js';
import XMLObject from './XMLObject.js';

export default class Property extends XMLObject {
	ordered = false;
	choices = null;
	constructor(id, name, choices = []) {
		super();
		this.choices = new Collection();
		this.id = id;
		this.name = name;
		this.addChoice(...choices);
	}
	toString() {
		return this.id;
	}
	get length() {
		return this.choices.length;
	}
	addChoice(...choices) {
		choices.forEach(choice => {
			choice = Choice.from(choice);
			choice.property = this;
			this.choices.set(choice.id, choice);
		});
	}
	addCell4Property(...properties) {
		this.choices.forEach(choice => {
			choice.addCell4Property(...properties);
		});
		return this;
	}
	static from(xmlElement) {
		if (xmlElement instanceof Property) {
			return xmlElement;
		}
		const result = new Property();
		result.parseAttributes(xmlElement, ["id", "name", "ordered"]);
		result.parseElements(xmlElement, 'choice', Choice, (...choices) => {
			result.addChoice(...choices);
		});
		// const choices = Array.from(xmlElement.getElementsByTagName('choice'));
		// result.ordered = (xmlElement.hasAttribute('ordered'));
		return result;
	}
}
class Choice {
	cells = null;
	constructor(id, text, abbr = "") {
		this.cells = new Collection();
		this.id = id;
		this.text = text;
		this.abbr = abbr;
	}
	toString() {
		return this.path;
	}
	get path() {
		return `${this.property.id}.${this.id}`;
	}
	addCell4Property(...properties) {
		properties.forEach(property => {
			if (property === this.property) return;
			const propCells = this.cells[property.id] = new Collection();
			this.addCell4Choice(...property.choices.v());
			// property.choices.forEach(choice => {
			// 	const cell = new Cell(this, choice);
			// 	console.log(`Cell ${property}, ${choice}, ${this}`);
			// 	propCells[choice.id] = new Cell(this, choice);
			// });
		});
	}
	addCell(cell, choice = null) {
		if (cell instanceof Choice) {
			let choice = cell;
			cell = new Cell(this, choice);
			choice.addCell(cell, this);
			this.addCell(cell, choice);
			return this;
		}
		choice = choice || cell.choices.find(choice => choice !== this);
		this.cells.set(choice.path, cell);
		return this;
	}
	addCell4Choice(...choices) {
		choices.forEach(choice => {
			this.addCell(choice);
		});
		return this;
	}
	
	static from(xmlElement) {
		if (xmlElement instanceof this) {
			return xmlElement;
		}
		const id = xmlElement.getAttribute('id');
		const text = xmlElement.textContent;
		const abbr = xmlElement.getAttribute('abbr') || "";
		const result = new Choice(id, text, abbr);
		return result;
	}
}
class Cell {
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
		this._state = value;
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
		this.auto = auto || false;
		if (this.state === "X") return;
		this.state = "X";
		this.strikeCorrespondingStricked();
	}
	check(auto = false) {
		this.auto = auto || false;
		if (this.state === "O") return;
		this.state = "O";
	}
	strikeCorrespondingStricked() {
		// Si A.a-B.b
		// Chercher dans X(ordre) pour A.a
		// Si X.x est "O" alors B.b-X.x est "X"
		// Chercher dans X pour B.b
		// Si X.x est "O" alors A.a-X.x est "X"

		// puis
		console.log(this.toString());
	}
	strikeNeighbours() {
		// Si boite.2-prix.100
		// Chercher dans ordre et concurrents pour boite.2
		// Chercher dans ordre et concurrents pour prix.100

		// puis
		console.log(this.toString());
	}
	toString() {
		return this.path;
	}
}
export { Property, Choice, Cell };