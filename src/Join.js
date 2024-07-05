import Action from "./Action.js";

export default class Join extends Action {
	constructor(...actions) {
		super("join");
		this.addAction(...actions);
	}
	addAction(...actions) {
		console.log("Join.addAction", actions);
		actions.forEach(action => {
			if (this.actions.includes(action) || action === this) return;
			this.actions.push(action);
			// action.addAction(this);
		});
	}
	delete() {
		debugger;
		this.enigma.removeAction(this);
		const actions = this.actions;
		this.actions = [];	// To avoid infinite loop
		actions.forEach(action => {
			action.removeAction(this);
			// action.delete();
		});
		// this.cells.forEach(cell => {
		// 	cell.removeAction(this);
		// });
		// this.autoCells.forEach(cell => {
		// 	cell.removeAction(this);
		// });
		return this;
	}
}