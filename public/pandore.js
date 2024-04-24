export default {
    titre: "Boîte de Pandore",
    intro: "Pandore Persimmons est l'animateur d'un jeu questionnaire durant lequel les concurrents méritent le droit d'ouvrir une des boites que l'on voit dans l'illustration. Le contenu des boites peut être très intéressant ou... nul. Pandore essaie de convaincre les participants d'abandonner leur chance d'ouvrir une boite en leur offrant de l'argent. Cette fois-ci, ça n'a pas marché. A l'aide des indices ci-dessous, trouvez l'ordre dans lequel les concurrents ouvriront les boites, quelle boite ils ouvriront et ce qu'ils gagneront.",
    avant: '<img class="avant" src="img/pandore.svg">',
    style: {
        ".avant": {
            "position": "absolute",
            "right": ".75in",
            "bottom": ".75in",
            "height": "23pc",
        },
        ".tableau": {
            "font-size": "11pt",
        },
        ".indices ol": {
            "font-size": "11pt",
            "columns": "2",
            "padding": "0",
            "column-rule": "1px dotted black",
        },
        ".indices li": {
            "margin": "0 0 0.5em 0",
            "margin-left": "1.5em",
            "page-break-inside": "avoid",
        },
        "p.intro": {
            "line-height": "1.2",
            "margin": "1em 0",
        },
        ".colonnes": {
            "grid-template-columns": "auto",
        },
        ".truc": {
            "left": "18pc",
            "bottom": "7pc",
        }
    },
    reference: "Le cube de jeux. #171",
    tableauResultats: false,
    indices: [
        "L'ordre des concurrents ne correspond jamais au numéro de la boite",
        "Lynne, qui a ouvert la deuxième boite, a gagné de l'argent, mais moins que Sharon dont le tour précédait celui de Lynne mais n'était pas immédiatement avant.",
        "Michael, dont le tour est venu après celui du gagnant de 100$, a ouvert une boîte à droite de celle du gagnant, mais pas juste à côté.",
        "La boite contenant un morceau de savon se trouvait juste à gauche de celle ouverte par le cinquième concurrent. La boite choisie par Jim était à gauche que ces deux boîtes.",
        "Le tour du concurrent qui a gagné une cuillère de bois était juste avant celui du concurrent qui a gagné 0,50$. La boite avec la cuillere était juste à droite de celle contenant 1000$.",
        "Susanne a ouvert la boite juste a droite de celle choisie par Robert qui a joué juste après elle.",
        "Les hommes n'ont pas ouvert de boites adjacentes. Le gagnant de 5000$ est la seule personne dont la boite se trouvait à droite de celle d'un homme et à gauche de celle d'une femme."
    ],
    groupes: {
        "Concurrents": [
            "Jim",
            "Lynne",
            "Michaël",
            "Robert",
            "Sharon",
            "Suzanne"
        ],
        "Prix": [
            "Savon",
            "Cuillère",
            "0,50$",
            "100$",
            "1000$",
            "5000$",
        ],
        "Boite": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
        ],
        "Ordre": [
            "Premier",
            "Deuxième",
            "Troisième",
            "Quatrième",
            "Cinquième",
            "Sixième",
        ],
    },
    apres: '<p class="truc note"><b>Truc:</b> Trouvez la boite qui contenait les 5000$.</p>',
}


