import Choix from "./Choix.js";

export default class Groupe {
	nom = "";
	choix = [];
	enigme = null;
	constructor(nom = "") {
		this.nom = nom;
	}
	static fromJson(json, nom = "") {
		let groupe = new this(nom);
		json.forEach(choix => groupe.ajouterChoix(choix));
		return groupe;
	}
	ajouterChoix(choix) {
		if (Array.isArray(choix)) {
			this.choix.forEach(c => this.ajouterChoix(c));
			return this;
		}
		if (typeof choix === "string") {
			choix = new Choix(choix);
		} else if (typeof choix === "string" && !(choix instanceof Choix)) {
			choix = Choix.fromJson(choix);
		}
		choix.setGroupe(this);
		this.choix.push(choix);
		return this;
	}
	setEnigme(enigme) {
		// this.enigme = enigme;
		return this;
	}
	
}