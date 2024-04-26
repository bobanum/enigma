export default class Choix {
	_libele = "";
	prop = null;
	constructor(libele) {
		this.libele = libele;
	}
	get libele() {
		return this._libele;
	}
	set libele(value) {
		this._libele = value;
	}
	static fromJson(json) {
		let choix = new this(json.libele);
		return choix;
	}
	setProp(prop) {
		// this.prop = prop;
		return this;
	}
}