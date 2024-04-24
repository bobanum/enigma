export default class Indice {
	libele = "";
	parties = {};
	enigme = null;
	static fromJson(json) {
		let indice = new this();
		if (typeof json === 'string') {
			indice.libele = json;
		} else {
			indice.libele = json.libele;
			indice.parties = json.parties;
		}
		return indice;
	}
	setEnigme(enigme) {
		// this.enigme = enigme;
		return this;
	}
}