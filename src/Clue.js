// import Part from './Part.js';
import XMLObject from './XMLObject.js';

export default class Clue extends XMLObject {
	static defaultAttributes = [];
	static defaultElements = [
		{
			selector: 'part',
			parser: (xmlElement)=> Part.from(xmlElement),
			handler: 'addPart'
		}
	];
	parts = [];
	constructor(xmlElement) {
		super();
	}
	toString() {
		return this.content.join(' ');
	}
	get length() {
		return this.parts.length;
	}
	addPart(...parts) {
		parts.forEach(part => {
			part.clue = this;
			this.parts.push(part);
		});
	}
}
class Part extends XMLObject {
	static defaultAttributes = [];
	static defaultElements = [];
	refs = [];
	content = [];
	toString() {
		return this.content.join(' ');
	}
	addRef(...refs) {
		refs.forEach(ref => {
			ref.part = this;
			this.refs.push(ref);
		});
	}
	static from(xmlElement) {
		const result = super.from(xmlElement);
		xmlElement.childNodes.forEach(child => {
			if (child.nodeName === 'ref') {
				const ref = Ref.from(child);
				result.content.push(ref);
				result.addRef(ref);
			} else {
				result.content.push(child.textContent);
			}
		});
		return result;
	}
}

class Ref extends XMLObject {
	static defaultAttributes = ['prop'];
	static defaultElements = [];
	prop = "";
	constructor(xmlElement) {
		super(xmlElement);
	}
	toString () {
		return `<a href="#" class="ref" data-prop="${this.prop}">${this.textContent}</a>`;
	}
}