import XMLObject from "./XMLObject.js";
import Property from "./Property.js";
import Clue from "./Clue.js";
import Collection from "./Collection.js";


export default class Enigma extends XMLObject {
	static defaultAttributes = ['title', 'reference', 'image'];
	static defaultElements = [
		{
			selector: 'props>prop',
			parser: (xmlElement)=> Property.from(xmlElement),
			handler: 'addProperty'
		},
		{
			selector: 'clues>*',
			parser: (xmlElement)=> Clue.from(xmlElement),
			handler: 'addClue'
		},
	]
	properties = null;
	clues = [];
	constructor(xmlElement) {
		super(xmlElement);
		this.properties = new Collection();
	}
	addProperty(...properties) {
		properties.forEach(property => {
			if (property instanceof Property === false) {
				property = Property.from(property);
			}
			property.enigma = this;
			const propsIds = this.properties.k();
			this.properties.set(property.id, property);
			propsIds.forEach(propId => {
				property.addCell4Property(this.properties.get(propId));
			});
		});
	}
	addClue(...clues) {
		clues.forEach(clue => {
			if (clue instanceof Clue === false) {
				clue = Clue.from(clue);
			}
			clue.enigma = this;
			this.clues.push(clue);
		});
	}
	static parseProperty(xmlElement) {
		return Property.from(xmlElement);
	}
	static from(xmlElement) {
		const result = super.from(xmlElement);
		// result.parseElements(xmlElement, 'prop', Property, (...properties) => {
		// 	result.addProperty(...properties);
		// });
		console.log('result', result);
		// result.parseElements(xmlElement, 'clues>*', Clue, (...clues) => {
		// 	console.log('clues', clues);
		// 	result.addClue(...clues);
		// });
		return result;
	}
}
