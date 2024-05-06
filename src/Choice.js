import Collection from './Collection.js';
import Cell from './Cell.js';
import XMLObject from './XMLObject.js';

export default class Choice extends XMLObject {
	static defaultAttributes = ['id', 'abbr'];
	static defaultElements = [];
	cells = null;
	constructor(xmlElement) {
		super(xmlElement);
		this.cells = new Collection();
	}
	toString() {
		return this.path;
	}
	get text() {
		return this.textContent;
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
	// static from(xmlElement) {
	// 	const result = super.from(xmlElement);
	// 	return result;
	// }
}
