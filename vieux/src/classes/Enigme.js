import Indice from "./Indice.js";
import Groupe from "./Groupe.js";
export default class Enigme {
	titre = "";
	intro = "";
	image = "";
	style = "";
	groupes = [];
	actions = [];
	indices = [];
	avant = "";
	apres = "";
	image = "";
	reference = "";
	constructor() {
	}
	ajouterGroupe(groupe, nom = "") {
		if (!(groupe instanceof Groupe)) {
			groupe = Groupe.fromJson(groupe, nom);
		}
		nom = nom || groupe.nom;
		this.groupes.push(groupe);
		groupe.setEnigme(this);
		return groupe;
	}
	ajouterIndice(indice) {
		if (!(indice instanceof Indice)) {
			indice = Indice.fromJson(indice);
		}
		this.indices.push(indice);
		indice.setEnigme(this);
		return indice;
	}
	static fromJson(json) {
		let enigme = new this();
		enigme.titre = json.titre;
		enigme.intro = json.intro;
		enigme.image = json.image;
		enigme.style = json.style;
		enigme.avant = json.avant;
		enigme.apres = json.apres;
		enigme.image = json.image;

		enigme.reference = json.reference;
		for (let nom in json.groupes) {
			enigme.ajouterGroupe(json.groupes[nom], nom);
		}
		json.indices.forEach(indice => enigme.ajouterIndice(indice));
		return enigme;
	}
}
