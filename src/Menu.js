export default class Menu {
    static main(donnees) {
        var courant = "";
        if (location.search) {
            courant = location.search.slice(1);
        }
        var nav = document.querySelector("body>nav");
        var ul = nav.appendChild(document.createElement("ul"));
        for (let k in donnees) {
            let li = ul.appendChild(document.createElement("li"));
            if (k === courant) {
                li.classList.add("courant");
            }
            let a = li.appendChild(document.createElement("a"));
            a.href = "?" + k;
            a.innerHTML = donnees[k];
        }
    }
    static init(donnees) {
        window.addEventListener("load", e => {
            this.main(donnees);
        })
    }
}