import Choice from './Choice.js';
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
