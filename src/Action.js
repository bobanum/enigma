export default class Action {
	cells = [];
	autoCells = [];
	actions = [];
	_enigma = null;
	icons = {
		"equal": "=",
		"notequal": "≠",
		"greater": ">",
		"less": "<",
		"eq": "=",
		"ne": "≠",
		"gt": ">",
		"lt": "<",
	};
	constructor(operator = "=", ...cells) {
		this.active = true;
		this.operator = operator;
		this._enigma = cells[0]?.enigma || null;
		this.addCell(...cells);
	}
	toString() {
		return this.path;
	}
	get path() {
		return 'Action [' + this.cells.map(cell => cell.path).join(this.icon) + ']';
	}
	get icon() {
		return this.icons[this.operator];
	}
	get enigma() {
		return this.cells[0]?.enigma || this.autoCells[0]?.enigma || this.actions[0]?.enigma;
	}
	addCell(...cells) {
		cells.forEach(cell => {
			if (this.cells.includes(cell)) return;
			this.cells.push(cell);
			// cell.addAction(this);
		});
	}
	removeCell(...cells) {
		cells.forEach(cell => {
			if (!this.cells.includes(cell)) return;
			this.cells = this.cells.filter(c => c !== cell);
			cell.actions = cell.actions.filter(action => action !== this);
		});
	}
	addAction(...actions) {
		actions.forEach(action => {
			if (this.actions.includes(action) || action === this) return;
			this.actions.push(action);
		});
	}
	addAutoCell(...cells) {
		cells.forEach(cell => {
			if (this.autoCells.includes(cell)) return;
			this.autoCells.push(cell);
			// cell.addAction(this);
		});
	}
	delete() {
		while (this.actions.length > 0) {
			this.actions.pop().delete();
		}
		this.cells.forEach(cell => {
			cell.removeAction(this);
		});
		this.enigma.removeAction(this);
		// const actions = this.actions;
		// this.actions = [];	// To avoid infinite loop
		// actions.forEach(action => {
		// 	action.removeAction(this);
		// 	// action.delete();
		// });
		// this.cells.forEach(cell => {
		// 	cell.removeAction(this);
		// });
		// this.autoCells.forEach(cell => {
		// 	cell.removeAction(this);
		// });
		return this;
	}
}