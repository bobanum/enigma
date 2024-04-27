export default class XMLObject {
	parseAttributes(xmlElement, attributes) {
		attributes.forEach(name => {
			this[name] = xmlElement.getAttribute(name)
		});
		return this;
	}
	parseElements(xmlElement, selector, parser, callback) {
		const elements = [...xmlElement.querySelectorAll(selector)];
		const parsed = (parser) ? elements.map(parser.from.bind(parser)) : elements;
		if (!callback) return parsed;
		if (typeof callback === "string") {
			this[callback] = parsed;
			return this;
		}
		if (typeof callback === "function") {
			return callback(...parsed);
		}
		if (Array.isArray(callback)) {
			callback.push(...parsed);
		}
		return this;
	}
}
