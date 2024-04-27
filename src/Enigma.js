import Property from "./Property.js";
import XMLObject from "./XMLObject.js";


export default class Enigma extends XMLObject {
	properties = {};
	clues = [];
	addProperty(...properties) {
		properties.forEach(property => {
			property = Property.from(property);
			property.enigma = this;
			this.properties[property.id] = property;
		});

	}
	static from(xmlElement) {
		if (xmlElement instanceof this) {
			return xmlElement;
		}
		const result = new this(xmlElement);
		result.parseAttributes(xmlElement, ['title', 'reference', 'image']);
		result.parseElements(xmlElement, 'prop', Property, (...properties) => {
			result.addProperty(...properties)
		});
		console.log(result.properties);
		return result;
	}
}
