import Choice from './Choice.js';
import Collection from './Collection.js';
import XMLObject from './XMLObject.js';

export default class Property extends XMLObject {
	static defaultAttributes = ['id', 'name', 'ordered'];
	static defaultElements = [
		{ 
			selector: 'choice',
			parser: (xmlElement) => Choice.from(xmlElement),
			handler: 'addChoice'
		}
	];

	ordered = false;
	choices = null;
	constructor(xmlElement) {
		super();
		this.choices = new Collection();
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
	static parseChoice(xmlElement) {
		return Choice.from(xmlElement);
	}
	static from(xmlElement) {
		const result = super.from(xmlElement);
		// result.parseElements(xmlElement, 'choice', Choice, (...choices) => {
		// 	result.addChoice(...choices);
		// });
		// const choices = Array.from(xmlElement.getElementsByTagName('choice'));
		// result.ordered = (xmlElement.hasAttribute('ordered'));
		return result;
	}
}
