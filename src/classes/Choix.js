export default class Choix {
	_libele = "";
	groupe = null;
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
	setGroupe(groupe) {
		// this.groupe = groupe;
		return this;
	}
}