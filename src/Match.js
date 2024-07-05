export default class Match {
	action = null;
	actions = [];
	cells = [];
	_state = null;
	constructor(action, ...cells) {
		this.action = action;
		this.addCell(...cells);
	}
	toString() {
		return this.path;
	}
	get path() {
		return this.action + '===' + this.cells.map(cell => cell.path).join('---');
	}
	get state() {
		return this._state;
	}
	set state(value) {
		if (value === this._state) return;
		this._state = value;
		this.cells.forEach(cell => {
			cell.setState(value, this.action);
		});
	}
	setState(value, action = null) {
		if (value === this._state) return;
		this.state = value;
		// this.addAction(action);
		return this;
	}
	resetState() {
		if (this._state === null) return;
		this._state = null;
		this.cells.forEach(cell => {
			cell.resetState();
		});
	}
	addCell(...cells) {
		cells.forEach(cell => {
			if (cell.matches.includes(this)) return;
			this.cells.push(cell);
			cell.addMatch(this);
			if (cell.state !== null && this.state === null) {
				this.state = cell.state;
			} else if (this.state !== null && cell.state === null) {
				cell.state = this.state;
			} else if (this.state !== cell.state) {
				console.error("Match.addCell", "Inconsistent states", this.state, cell.state);
			}
		});
	}
	addAction(action) {
		if (!action || this.actions.includes(action)) return;
		this.actions.push(action);
		action.addAutoCell(this);
		return this;
	}
	removeAction(...actions) {
		actions.forEach(action => {
			
			const pos = this.actions.indexOf(action);
			if (pos < 0) return;
			this.actions.splice(pos, 1);
			this.cells.forEach(cell => {
				console.log(cell.path, cell.actions.length);
				cell.removeAction(action);
			});
		});

		if (this.actions.length === 0) {
			this.auto = false;
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
		this.setState("X", action);
	}
	check(action = false) {
		if (this._state === "O") return;
		if (this._state === "X") {
			// throw "Cannot check a striked cell : " + this.path;
			return;
		}
		this.setState("O", action);
	}

}