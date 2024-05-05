export default class XMLObject {
	static defaultAttributes = [];
	static defaultElements = [];
	textContent = "";

	parseAttributes(xmlElement, attributes) {
		attributes.forEach(name => {
			this[name] = xmlElement.getAttribute(name)
		});
		return this;
	}
	parseElements(xmlElement, selector, parser, handler) {
		const elements = [...xmlElement.querySelectorAll(selector)];
		if (typeof parser === "string") {
			parser = eval(parser);
		}
		const parsed = (parser) ? elements.map(parser.bind(parser)) : elements;
		if (!handler) return parsed;
		if (typeof handler === "string") {
			this[handler](...parsed);
			return this;
		}
		if (typeof handler === "function") {
			return handler(...parsed);
		}
		// if (Array.isArray(handler)) {
		// 	handler.push(...parsed);
		// }
		return this;
	}
	static from(xmlElement) {
		if (xmlElement instanceof this) {
			return xmlElement;
		}
		const result = new this(xmlElement);
		result.parseAttributes(xmlElement, this.defaultAttributes);
		result.textContent = xmlElement.textContent;
		this.defaultElements.forEach(({ selector, parser, handler }) => {
			result.parseElements(xmlElement, selector, parser, handler);
		});
		// result.parseElements(xmlElement, 'prop', Property, (...properties) => {
		// 	result.addProperty(...properties);
		// });

		return result;
	}
}
