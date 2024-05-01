export default class Collection extends Map {
	get length() {
		return this.size;
	}
	toString() {
		const result = [];
		for (let [k, v] of this) {
			result.push(`${k}:${v}`);
		}
		return result.join(", ");
	}
	v(i) {
		const result = [...this.values()];
		if (i !== undefined) {
			return result[i];
		}
		return result;
	}
	k(i) {
		const result = [...this.keys()];
		if (i !== undefined) {
			return result[i];
		}
		return result;
	}

	e(i) {
		const result = [...super.entries()];
		if (i !== undefined) {
			return result[i];
		}
		return result;
	}
	slice(start, end) {
		return this.values().slice(start, end);
	}

	gather(property) {
		const result = new Collection();
		for (const [key, value] of this) {
			if (value[property]) {
				result.set(key, value[property]);
			}
		}
		return this;
	}
	includes(value) {
		return [...this.values()].includes(value);
	}
}