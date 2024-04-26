class Property {
	ordered = false;
	constructor(id, name, choices = []) {
		this.id = id;
		this.name = name;
		this.choices = choices;
	}
	get length() {
		return this.choices.length;
	}
	static from(xmlElement) {
		const id = xmlElement.getAttribute('id');
		const name = xmlElement.getAttribute('name');
		const choices = Array.from(xmlElement.getElementsByTagName('choice')).map(Choice.from);
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
		const id = xmlElement.getAttribute('id');
		const text = xmlElement.textContent;
		const abbr = xmlElement.getAttribute('abbr') || "";
		const result = new Choice(id, text, abbr);
		return result;
	}
}
export { Property as default, Property, Choice };