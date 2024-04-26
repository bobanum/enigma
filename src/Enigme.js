export default class Enigme {
    static load(enigme) {
        this.enigme = enigme;
        this.actions = [];
        this.nomsGroupes = Object.keys(this.enigme.groupes);
        this.groupes = Object.values(this.enigme.groupes);
        this.nbElements = Object.values(this.enigme.groupes)[0].length;
        var app = document.getElementById("app");
        var page = app.appendChild(document.createElement("div"));
        page.classList.add("page");
        if (this.enigme.style) {
            document.head.appendChild(this.html_style(this.enigme.style));
        }
        if (this.enigme.avant) {
            page.appendChild(this.html_extra(this.enigme.avant));
        }
        page.appendChild(this.html_titre(this.enigme.titre));
        if (this.enigme.intro) {
            page.appendChild(this.html_intro(this.enigme.intro));
        }
        var colonnes = page.appendChild(document.createElement("div"));
        colonnes.classList.add("colonnes");
        colonnes.appendChild(this.html_indices(this.enigme.indices));
        colonnes.appendChild(this.html_tableau(this.enigme.groupes));
        if (enigme.tableauResultats !== false) {
            page.appendChild(this.html_resultats(this.enigme.groupes));
        }
        if (this.enigme.reference) {
            page.appendChild(this.html_reference(this.enigme.reference));
        }
        if (this.enigme.apres) {
            page.appendChild(this.html_extra(this.enigme.apres));
        }
        if (this.solve) {
            app.classList.add("solve");
            app.appendChild(this.html_actions());
        }
    }
    static html_style(style) {
        var resultat = document.createElement("style");
        resultat.innerHTML = this.css_style(style);
        return resultat;
    }
    static css_style(style) {
        if (typeof style === "string") {
            return style;
        }
        if (style instanceof Array) {
            return style.join(" ");
        }
        var regles = [];
        for (let selecteur in style) {
            regles.push(`${selecteur} { ${this.css_regle(style[selecteur])} }`);
        }
        return regles.join(" ");
    }
    static css_regle(regle) {
        if (typeof regle === "string") {
            return regle;
        }
        if (regle instanceof Array) {
            return regle.join("; ") + ";";
        }
        var props = [];
        for (let nom in regle) {
            props.push(`${nom}: ${this.css_regle(regle[nom])};`);
        }
        return props.join(" ");
    }
    static html_extra(extra) {
        var resultat = document.createElement("div");
        resultat.classList.add("extra");
        resultat.innerHTML = extra;
        return resultat;
    }
    static html_titre(titre) {
        var resultat = document.createElement("h1");
        resultat.innerHTML = "Énigme : " + titre;
        document.title = resultat.textContent;
        return resultat;
    }
    static html_intro(intro) {
        let resultat = document.createElement("p");
        resultat.classList.add("intro");
        resultat.innerHTML = intro;
        return resultat;
    }
    static html_indices(indices) {
        var resultat = document.createElement("div");
        resultat.classList.add("indices");
        var titre = resultat.appendChild(document.createElement("h2"));
        titre.innerHTML = "Les indices";
        var liste = resultat.appendChild(document.createElement("ol"));
        indices.forEach(indice => {
            var li = liste.appendChild(document.createElement("li"));
            li.innerHTML = indice;
        });
        return resultat;
    }
    static html_tableau(groupes) {
        var resultat = document.createElement("div");
        resultat.classList.add("tableau");
        resultat.style.setProperty("--nb-elements", this.nbElements);
        var auto = Array(this.nbElements).fill("auto").join(" ");
        resultat.style.gridAutoColumns = `2pt ${auto}`;
        resultat.style.gridAutoRows = `2pt ${auto}`;
        resultat.appendChild(this.html_tableauEnteteH(groupes));
        resultat.appendChild(this.html_tableauEnteteV(groupes));
        resultat.appendChild(this.html_coches(groupes));
        return resultat;
    }
    static html_tableauEnteteH(groupes) {
        var resultat = document.createElement("div");
        resultat.classList.add("entete-h");
        var keys = Object.keys(groupes).slice(1).reverse();
        keys.forEach((key, i) => {
            let groupe = this.html_groupeH(key, groupes[key]);
            groupe.style.setProperty("--gc", 4 + i * (this.nbElements + 1));
            resultat.appendChild(groupe);
        });

        return resultat;
    }
    static html_groupeH(titre, elements) {
        var resultat = document.createElement("div");
        resultat.classList.add("groupe");
        var h1 = resultat.appendChild(document.createElement("h1"));
        h1.innerHTML = titre;
        elements.forEach((element, i) => {
            var div = resultat.appendChild(document.createElement("div"));
            div.classList.add("element");
            div.style.setProperty("--c", i);
            div.innerHTML = element;
        });
        return resultat;
    }
    static html_tableauEnteteV(groupes) {
        var resultat = document.createElement("div");
        resultat.classList.add("entete-v");
        var keys = Object.keys(groupes).slice(0, -1);
        keys.forEach((key, i) => {
            let groupe = this.html_groupeV(key, groupes[key]);
            groupe.style.setProperty("--gr", 4 + i * (this.nbElements + 1));
            resultat.appendChild(groupe);
        });

        return resultat;
    }
    static html_groupeV(titre, elements) {
        var resultat = document.createElement("div");
        resultat.classList.add("groupe");
        var h1 = resultat.appendChild(document.createElement("h1"));
        h1.innerHTML = titre;
        elements.forEach((element, i) => {
            var div = resultat.appendChild(document.createElement("div"));
            div.classList.add("element");
            div.style.setProperty("--r", i);
            div.innerHTML = element;
        });
        return resultat;
    }
    static html_coches(groupes) {
        var resultat = document.createElement("div");
        resultat.classList.add("coches");
        var keys = Object.keys(groupes);
        for (let i = 0, n = keys.length - 1; i < n; i += 1) {
            for (let j = 0, m = keys.length - 1 - i; j < m; j += 1) {
                var groupe = resultat.appendChild(document.createElement("div"));
                groupe.classList.add("groupe");
                groupe.style.setProperty("--gr", 4 + i * (this.nbElements + 1));
                groupe.style.setProperty("--gc", 4 + j * (this.nbElements + 1));
                groupe.dataset.gauche = i;
                groupe.dataset.haut = keys.length - j - 1;
                this.html_cochesGroupe(groupe, this.nbElements);
            }
        }
        return resultat;
    }
    static html_cochesGroupe(groupe, nb) {
        for (let i = 0; i < nb; i += 1) {
            for (let j = 0; j < nb; j += 1) {
                var coche = groupe.appendChild(document.createElement("div"));
                coche.classList.add("cell");
                coche.style.setProperty("--r", i);
                coche.style.setProperty("--c", j);
                coche.dataset.gauche = i;
                coche.dataset.haut = j;
                coche.dataset.coord = this.coord(coche);
                // coche.style.gridArea = ga;
                coche.addEventListener("dblclick", e => {
                    if (e.target.classList.contains("auto")) {
                        return;
                    }
                    if (e.target.classList.contains("X") || e.target.classList.contains("O")) {
                        this.deleteAction(e.target.action);
                    }
                });
                    
                coche.addEventListener("click", e => {
                    if (e.target.classList.contains("auto")) {
                        return;
                    }
                    if (e.target.classList.contains("X") || e.target.classList.contains("O")) {
                        return;
                    } else {
                        var coord = this.coord(e.target);

                        if (e.ctrlKey) {
                            var op = "=";
                            this.cocher(e.target, false);
                        } else {
                            var op = "≠";
                            this.barrer(e.target, false);
                        }
                        this.trouverComplets();
                        var code = `${op};${coord}`;
                        this.ajouterAction(code, e.currentTarget);
                        console.log(e.currentTarget.action);
                    }
                    // this.mettreAJour();
                });
                coche.addEventListener("mouseenter", e => {
                    var li = e.target.action;
                    if (!li) return;
                    li.classList.add("hover");
                });
                coche.addEventListener("mouseleave", e => {
                    var li = e.target.action;
                    if (!li) return;
                    li.classList.remove("hover");
                });
            }
        }
    }
    static coord(cell, string = true) {
        var gG = cell.parentNode.dataset.gauche;
        var gH = cell.parentNode.dataset.haut;
        var g = cell.dataset.gauche;
        var h = cell.dataset.haut;
        if (string) {
            return `${gG}:${g},${gH}:${h}`;
        } else {
            return { gG: gG, g: g, gH: gH, h: h };
        }
    }
    static cell(coord) {
        if (typeof coord === "string") {
            coord = /^([0-9]+):([0-9]+),([0-9]+):([0-9]+)$/.exec(coord).slice(1); // slice pour ne garder que les captures
        }
        if (coord instanceof Array) {
            let arr = coord;
            coord = {};
            [coord.gG, coord.g, coord.gH, coord.h] = arr;
        }
        var selecteur = `.groupe`;
        selecteur += `[data-gauche="${coord.gG}"]`;
        selecteur += `[data-haut="${coord.gH}"]`;
        selecteur += `>.cell`;
        selecteur += `[data-gauche="${coord.g}"]`;
        selecteur += `[data-haut="${coord.h}"]`;
        return document.querySelector(selecteur);
    }
    static mettreAJour() {
        //vider
        var cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.classList.remove("O", "X", "auto");
        });
        this.actions.forEach(action => {
            if (action[0] === "-") return;
            var cell = this.cell(action.slice(2));
            if (action[0] === "=") {
                this.cocher(cell, false);
            } else {
                this.barrer(cell, false);
            }
            this.trouverComplets();
        });
    }
    static barrer(cell, auto = true) {
        if (cell.classList.contains("O") || cell.classList.contains("X")) return;
        cell.classList.add("X");
        if (auto) {
            cell.classList.add("auto");
        }
        var coord = this.coord(cell, false);
        // ON ELIMINE LES BARREE
        this.eliminerCorrespondantsBarre(coord);
        // ON COCHE LES COCHEES
    }
    static cocher(cell, auto = true) {
        if (cell.classList.contains("O") || cell.classList.contains("X")) return;
        cell.classList.add("O");
        if (auto) {
            cell.classList.add("auto");
        }
        var coord = this.coord(cell, false);
        // ON ÉLIMINE LA CASE
        this.eliminerVoisins(coord);
        // ON ELIMINE LES BARREE
        this.eliminerCorrespondantsCoche(coord);
        // ON COCHE LES COCHEES

    }
    static eliminerVoisins(coord) {
        var selecteurG = `.groupe[data-gauche="${coord.gG}"][data-haut="${coord.gH}"]`;
        var selecteurX = `:not(.X):not(.O)`;
        var selecteur = `${selecteurG}>.cell[data-gauche="${coord.g}"]${selecteurX}`;
        selecteur += `, ${selecteurG}>.cell[data-haut="${coord.h}"]${selecteurX}`;
        var cells = document.querySelectorAll(selecteur);
        cells.forEach(cell => {
            this.barrer(cell);
        });
    }
    static mix1(c1, c2) {
        return {
            gG: c1.gH,
            g: c1.h,
            gH: c2.gH,
            h: c2.h
        };
    }
    static mix2(c1, c2) {
        return {
            gG: c1.gG,
            g: c1.g,
            gH: c2.gH,
            h: c2.h
        };
    }
    static mix3(c1, c2) {
        return {
            gG: c1.gG,
            g: c1.g,
            gH: c2.gG,
            h: c2.g
        };
    }
    static eliminerCorrespondantsCoche(coord) {
        var selecteur = `.groupe[data-gauche="${coord.gG}"]:not([data-haut="${coord.gH}"])`;
        selecteur += `>.cell[data-gauche="${coord.g}"]`;
        var cells = document.querySelectorAll(selecteur);
        cells.forEach(cell => {
            var coord2 = this.coord(cell, false);
            if (coord2.gH < coord.gH) {
                var coord3 = this.mix1(coord2, coord);
            } else {
                var coord3 = this.mix1(coord, coord2);
            }
            var cell3 = this.cell(coord3);
            if (cell.classList.contains("X")) {
                this.barrer(cell3);
            } else if (cell.classList.contains("O")) {
                this.cocher(cell3);
            }
        });
        var selecteur = `.groupe[data-haut="${coord.gG}"]:not([data-gauche="${coord.gH}"])`;
        selecteur += `>.cell[data-haut="${coord.g}"]`;
        var cells = document.querySelectorAll(selecteur);
        cells.forEach(cell => {
            var coord2 = this.coord(cell, false);
            var coord3 = this.mix2(coord2, coord);
            var cell3 = this.cell(coord3);
            if (cell.classList.contains("X")) {
                this.barrer(cell3);
            } else if (cell.classList.contains("O")) {
                this.cocher(cell3);
            }
        });
        var selecteur = `.groupe[data-haut="${coord.gH}"]:not([data-gauche="${coord.gG}"])`;
        selecteur += `>.cell[data-haut="${coord.h}"]`;
        var cells = document.querySelectorAll(selecteur);
        cells.forEach(cell => {
            var coord2 = this.coord(cell, false);
            if (coord2.gG < coord.gG) {
                var coord3 = this.mix3(coord2, coord);
            } else {
                var coord3 = this.mix3(coord, coord2);
            }
            var cell3 = this.cell(coord3);
            if (cell.classList.contains("X")) {
                this.barrer(cell3);
            } else if (cell.classList.contains("O")) {
                this.cocher(cell3);
            }
        });
        var selecteur = `.groupe[data-gauche="${coord.gH}"]:not([data-haut="${coord.gG}"])`;
        selecteur += `>.cell[data-gauche="${coord.h}"]`;
        var cells = document.querySelectorAll(selecteur);
        cells.forEach(cell => {
            var coord2 = this.coord(cell, false);
            var coord3 = this.mix2(coord, coord2);
            var cell3 = this.cell(coord3);
            if (cell.classList.contains("X")) {
                this.barrer(cell3);
            } else if (cell.classList.contains("O")) {
                this.cocher(cell3);
            }
        });
    }
    static eliminerCorrespondantsBarre(coord) {
        var selecteur = `.groupe[data-gauche="${coord.gG}"]:not([data-haut="${coord.gH}"])`;
        selecteur += `>.cell.O[data-gauche="${coord.g}"]`;
        var cells = document.querySelectorAll(selecteur);
        cells.forEach(cell => {
            var coord2 = this.coord(cell, false);
            if (coord2.gH < coord.gH) {
                var coord3 = this.mix1(coord2, coord);
            } else {
                var coord3 = this.mix1(coord, coord2);
            }
            var cell3 = this.cell(coord3);
            this.barrer(cell3);
        });
        var selecteur = `.groupe[data-haut="${coord.gG}"]:not([data-gauche="${coord.gH}"])`;
        selecteur += `>.cell.O[data-haut="${coord.g}"]`;
        var cells = document.querySelectorAll(selecteur);
        cells.forEach(cell => {
            var coord2 = this.coord(cell, false);
            var coord3 = this.mix2(coord2, coord);
            var cell3 = this.cell(coord3);
            this.barrer(cell3);
        });
        var selecteur = `.groupe[data-haut="${coord.gH}"]:not([data-gauche="${coord.gG}"])`;
        selecteur += `>.cell.O[data-haut="${coord.h}"]`;
        var cells = document.querySelectorAll(selecteur);
        cells.forEach(cell => {
            var coord2 = this.coord(cell, false);
            if (coord2.gG < coord.gG) {
                var coord3 = this.mix3(coord2, coord);
            } else {
                var coord3 = this.mix3(coord, coord2);
            }
            var cell3 = this.cell(coord3);
            this.barrer(cell3);
        });
        var selecteur = `.groupe[data-gauche="${coord.gH}"]:not([data-haut="${coord.gG}"])`;
        selecteur += `>.cell.O[data-gauche="${coord.h}"]`;
        var cells = document.querySelectorAll(selecteur);
        cells.forEach(cell => {
            var coord2 = this.coord(cell, false);
            var coord3 = this.mix2(coord, coord2);
            var cell3 = this.cell(coord3);
            this.barrer(cell3);
        });
    }
    static trouverComplets() {
        var limite = 3;
        var modifie = true;
        const n = this.groupes[0].length;
        while ( limite-- && modifie) {
            modifie = false;
            const groupes = document.querySelectorAll(".coches .groupe");

            groupes.forEach(groupe => {
                for (let i = 0; i < n; i += 1) {
                    var colonne = [...groupe.querySelectorAll(`.cell[data-haut="${i}"]:not(.X):not(.O)`)];
                    console.log(colonne.length);
                    if (colonne.length === 1) {
                        modifie = true;
                        this.cocher(colonne[0]);
                    }
                    var rangee = [...groupe.querySelectorAll(`.cell[data-gauche="${i}"]:not(.X):not(.O)`)];
                    if (rangee.length === 1) {
                        console.log(rangee);
                        modifie = true;
                        this.cocher(rangee[0]);
                    }
                }
            });
        }
        // console.log(modifie);
    }
    static ajouterAction(code, cell) {
        this.actions.push(code);
        var [op, gG, g, gH, h] = /^([=≠]);([0-9]+):([0-9]+),([0-9]+):([0-9]+)$/.exec(code).slice(1);
        var nomG = this.groupes[gG][g];
        var nomH = this.groupes[gH][h];
        var label = `<i>(${this.nomsGroupes[gG]}) "${nomG}"</i><b>${op}</b><i>"${nomH}" (${this.nomsGroupes[gH]})</i>`;
        var li = this.listeActions.appendChild(document.createElement("li"));
        li.dataset.code = code;
        li.dataset.coord = code.slice(2);
        li.cell = cell;
        cell.action = li;
        var span = li.appendChild(document.createElement("span"));
        span.innerHTML = label;
        var span = li.appendChild(this.html_delete());
        var span = li.appendChild(this.html_visibility());
    }
    static html_delete() {
        var span = document.createElement("span");
        span.classList.add("delete");
        span.addEventListener("click", e => {
            this.deleteAction(e.currentTarget);
        });
        return span;
    }
    static deleteAction(li) {
        li = li.closest("li");
        var code = li.dataset.code;
        li.remove();
        this.actions.splice(this.actions.indexOf(code), 1);
        this.mettreAJour();
    }
    static html_visibility() {
        var span = document.createElement("span");
        span.classList.add("visibility");
        span.addEventListener("click", e => {
            var code = e.target.parentNode.dataset.code;
            e.target.parentNode.classList.toggle("disabled");
            if (e.target.parentNode.classList.contains("disabled")) {
                var i = this.actions.indexOf(code);
                this.actions[i] = "-" + this.actions[i];
            } else {
                var i = this.actions.indexOf("-" + code);
                this.actions[i] = this.actions[i].slice(1);
            }
            this.mettreAJour();
        });
        return span;
    }
    static html_resultats(groupes) {
        var resultat = document.createElement("div");
        resultat.classList.add("resultats");
        var h2 = resultat.appendChild(document.createElement("h2"));
        h2.innerHTML = "Résultats";
        var table = resultat.appendChild(document.createElement("table"));
        var thead = table.appendChild(document.createElement("thead"));
        var tr = thead.appendChild(document.createElement("tr"));
        let nomsGroupes = Object.keys(groupes);
        nomsGroupes.push(nomsGroupes.shift())
        nomsGroupes.reverse();
        nomsGroupes.forEach(nom => {
            let th = tr.appendChild(document.createElement("th"));
            th.innerHTML = nom;
        });
        var tbody = table.appendChild(document.createElement("tbody"));
        var reponses = Object.values(groupes)[0];
        var colonnes = Object.keys(groupes).slice(1).reverse();
        var nbColonnes = colonnes.length;
        reponses.forEach((reponse, r) => {
            let tr = tbody.appendChild(document.createElement("tr"));
            let th = tr.appendChild(document.createElement("th"));
            th.innerHTML = reponse;
            if (this.enigme.solution) {
                let solution = this.enigme.solution[r];
                for (let i = 0; i < nbColonnes; i += 1) {
                    let td = tr.appendChild(document.createElement("td"));
                    td.setAttribute("data-solution", groupes[colonnes[i]][solution[i]]);
                }
            } else {
                for (let i = 0; i < nbColonnes; i += 1) {
                    tr.appendChild(document.createElement("td"));
                }
            }
        });
        /////
        var keys = Object.keys(groupes);
        for (let i = 0, n = keys.length - 1; i < n; i += 1) {
            for (let j = 0, m = keys.length - 1 - i; j < m; j += 1) {
                var groupe = resultat.appendChild(document.createElement("div"));
                groupe.classList.add("groupe");
                groupe.style.setProperty("--gr", 3 + i * this.nbElements);
                groupe.style.setProperty("--gc", 3 + j * this.nbElements);
                this.html_cochesGroupe(groupe, this.nbElements);
            }
        }
        thead.addEventListener("dblclick", e => {
            // if (e.ctrlKey) {
            e.currentTarget.closest("table").classList.toggle("afficher");
            // }
        });
        return resultat;
    }
    static html_reference(ref) {
        var resultat = document.createElement("div");
        resultat.classList.add("reference");
        resultat.innerHTML = `Référence: ${ref}`;
        return resultat;
    }
    static html_actions() {
        var resultat = document.createElement("div");
        resultat.classList.add("pane-actions");
        var div = resultat.appendChild(document.createElement("div"));
        div.classList.add("actions");
        var titre = div.appendChild(document.createElement("h2"));
        titre.innerHTML = "Actions";
        this.listeActions = div.appendChild(document.createElement("ul"));
        return resultat;
    }
    static init(enigme) {
        this.solve = true;
        window.addEventListener("load", e => {
            this.load(enigme);
        });
    }
}
