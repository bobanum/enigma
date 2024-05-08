export default class Action {
	cells = [];
	autoCells = [];
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
		this.addCell(...cells);
	}
	get icon() {
		return this.icons[this.operator];
	}
	addCell(...cells) {
		cells.forEach(cell => {
			if (this.cells.includes(cell)) return;
			this.cells.push(cell);
			cell.addAction(this);
		});
	}
	addAutoCell(...cells) {
		cells.forEach(cell => {
			if (this.autoCells.includes(cell)) return;
			this.autoCells.push(cell);
			cell.addAction(this);
		});
	}
}