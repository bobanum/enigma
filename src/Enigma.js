import Collection from "./Collection.js";
import Property from "./Property.js";
import XMLObject from "./XMLObject.js";


export default class Enigma extends XMLObject {
	properties = null;
	clues = [];
	constructor(xmlElement) {
		super(xmlElement);
		this.properties = new Collection();
	}
	addProperty(...properties) {
		properties.forEach(property => {
			property = Property.from(property);
			property.enigma = this;
			const propsIds = this.properties.k();
			this.properties.set(property.id, property);
			propsIds.forEach(propId => {
				property.addCell4Property(this.properties.get(propId));
			});
		});
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
