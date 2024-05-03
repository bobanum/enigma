import Collection from './Collection.js';
import Cell from './Cell.js';

export default class Choice {
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
