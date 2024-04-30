import Property from "./Property.js";
import XMLObject from "./XMLObject.js";


export default class Enigma extends XMLObject {
	properties = {};
	clues = [];
	constructor(xmlElement) {
		super(xmlElement);
		this.properties = {};
		Object.defineProperties(this.properties, {
			'length': {
				get: function () { return Object.keys(this).length; }
			},
			'values': {
				get: function () { return Object.values(this); }
			},
			'choicesCount': {
				get: function () { return this.values[0].choices.length; }
			},
			'test': {
				get: function () { return this.values[0].choices.length; }
			}
		});
	}
	addProperty(...properties) {
		properties.forEach(property => {
			property = Property.from(property);
			property.enigma = this;
			const propsIds = Object.keys(this.properties);
			this.properties[property.id] = property;
			propsIds.forEach(propId => {
				property.addCellProperty(this.properties[propId]);
			});
		});
		console.log(this.properties);
	}
	static from(xmlElement) {
		if (xmlElement instanceof this) {
			return xmlElement;
		}
		const result = new this(xmlElement);
		result.parseAttributes(xmlElement, ['title', 'reference', 'image']);
		result.parseElements(xmlElement, 'prop', Property, (...properties) => {
			result.addProperty(...properties);
		});
		return result;
	}
}
