import XMLObject from './XMLObject.js';

export default class Property extends XMLObject {
	ordered = false;
	choices = [];
	constructor(id, name, choices = []) {
		super();
		this.id = id;
		this.name = name;
		this.addChoice(...choices);
	}
	get length() {
		return this.choices.length;
	}
	addChoice(...choices) {
		choices.forEach(choice => {
			choice = Choice.from(choice);
			choice.property = this;
			this.choices.push(choice);
		});
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
	cells = {};
	constructor(id, text, abbr = "") {
		this.id = id;
		this.text = text;
		this.abbr = abbr;
	}
	toString() {
		return `${this.property.id}.${this.id}`;
	}
	addCellProperty(...properties) {
		properties.forEach(property => {
			if (property === this.property) return;
			const prop = this.cells[property.id] = {};
			property.choices.forEach(choice => {
				prop[choice.id] = new Cell(this, choice);
			});
		});
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
	auto = false;
	name = "cell";
	constructor(owner, corresponding) {
		this.owner = owner;
		this.corresponding = corresponding;
	}
	get state() {
		return this._state;
	}
	set state(value) {
		if (value === this._state) return;
		this._state = value;
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
		return `${this.owner}-${this.corresponding}`;
	}
}
export { Property, Choice, Cell };