class Property {
	ordered = false;
	choices = [];
	constructor(id, name, choices = []) {
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
		if (xmlElement instanceof this) {
			return xmlElement;
		}
		const id = xmlElement.getAttribute('id');
		const name = xmlElement.getAttribute('name');
		const choices = Array.from(xmlElement.getElementsByTagName('choice'));
		const result = new Property(id, name, choices);
		result.ordered = (xmlElement.hasAttribute('ordered'));
		return result;
	}
}
class Choice {
	constructor(name, text) {
		this.name = name;
		this.text = text;
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
export { Property as default, Property, Choice };