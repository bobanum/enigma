<template>
	<div class="enigme" v-if="enigme">
		{{ enigme }}
		<div class="extra image" v-if="enigme.image"><object :data="'/'+enigme.image" alt=""></object></div>
		<div class="extra avant" v-if="enigme.avant" v-html="enigme.avant"></div>
		<h1>Énigme : {{ enigme.titre }}</h1>
		<p class="intro">Depuis qu'il a acheté un détecteur de métal, Derek a saisi chaque occasion pour essayer de trouver un trésor. La semaine dernière, il s'est servi de son jouet à cinq reprises, mais chaque fois il mettait tant de temps à trouver quelque chose qu'il abandonnait au premier objet trouvé. À l'aide des indices à droite, pouvez-vous classer les excursions de Derek dans le bon ordre en identifiant les lieux où il a cherché, le temps qu'il a passé à chercher et ce qu'il a éventuellement trouvé?</p>
		<div class="colonnes">
			<div class="indices">
				<h2>Les indices</h2>
				<ol>
					<li>La poignée a été trouvée en 20 minutes, mais pas dans le jardin de Derek.</li>
					<li>La troisième fois qu'il a utilisé son détecteur de métal, Derek a passé plus d'une demi-heure à chercher dans le champ d'un fermier, mais ce n'est pas ce jour-là qu'il a trouvé la capsule.</li>
					<li>L'excursion au parc n'a donné rien de mieux qu'une vieille cuillère.</li>
					<li>La quatrième sortie de Derek a permis de trouver une clé anglaise après des recherches ayant duré moins de 40 minutes. L'excursion de 25 minutes à la plage avait eu lieu avant.</li>
					<li>La deuxième sortie de notre explorateur a duré seulement 15 minutes.</li>
				</ol>
			</div>
			<div class="tableau" style="--nb-choices: 5; grid-auto-columns: 2pt auto auto auto auto auto; grid-auto-rows: 2pt auto auto auto auto auto;">
				<div class="entete-h">
					<div class="prop" style="--gc: 4;">
						<h1>Sortie</h1>
						<div class="choice" style="--c: 0;">Première</div>
						<div class="choice" style="--c: 1;">Deuxième</div>
						<div class="choice" style="--c: 2;">Troisième</div>
						<div class="choice" style="--c: 3;">Quatrième</div>
						<div class="choice" style="--c: 4;">Cinquième</div>
					</div>
					<div class="prop" style="--gc: 10;">
						<h1>Lieu</h1>
						<div class="choice" style="--c: 0;">Plage</div>
						<div class="choice" style="--c: 1;">Champ</div>
						<div class="choice" style="--c: 2;">Jardin d'un ami</div>
						<div class="choice" style="--c: 3;">Son jardin</div>
						<div class="choice" style="--c: 4;">Parc</div>
					</div>
					<div class="prop" style="--gc: 16;">
						<h1>Objet</h1>
						<div class="choice" style="--c: 0;">Capsule</div>
						<div class="choice" style="--c: 1;">Poignée</div>
						<div class="choice" style="--c: 2;">Clé anglaise</div>
						<div class="choice" style="--c: 3;">Cuillère</div>
						<div class="choice" style="--c: 4;">Jouet</div>
					</div>
				</div>
				<div class="entete-v">
					<div class="prop" style="--gr: 4;">
						<h1>Durée</h1>
						<div class="choice" style="--r: 0;">15 minutes</div>
						<div class="choice" style="--r: 1;">20 minutes</div>
						<div class="choice" style="--r: 2;">25 minutes</div>
						<div class="choice" style="--r: 3;">35 minutes</div>
						<div class="choice" style="--r: 4;">40 minutes</div>
					</div>
					<div class="prop" style="--gr: 10;">
						<h1>Objet</h1>
						<div class="choice" style="--r: 0;">Capsule</div>
						<div class="choice" style="--r: 1;">Poignée</div>
						<div class="choice" style="--r: 2;">Clé anglaise</div>
						<div class="choice" style="--r: 3;">Cuillère</div>
						<div class="choice" style="--r: 4;">Jouet</div>
					</div>
					<div class="prop" style="--gr: 16;">
						<h1>Lieu</h1>
						<div class="choice" style="--r: 0;">Plage</div>
						<div class="choice" style="--r: 1;">Champ</div>
						<div class="choice" style="--r: 2;">Jardin d'un ami</div>
						<div class="choice" style="--r: 3;">Son jardin</div>
						<div class="choice" style="--r: 4;">Parc</div>
					</div>
				</div>
				<div class="coches">
					<div class="prop" style="--gr: 4; --gc: 4;" data-gauche="0" data-haut="3">
						<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="0:0,3:0"></div>
						<div class="cell" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="0:0,3:1"></div>
						<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="0:0,3:2"></div>
						<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="0:0,3:3"></div>
						<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="0:0,3:4"></div>
						<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="0:1,3:0"></div>
						<div class="cell" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="0:1,3:1"></div>
						<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="0:1,3:2"></div>
						<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="0:1,3:3"></div>
						<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="0:1,3:4"></div>
						<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="0:2,3:0"></div>
						<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="0:2,3:1"></div>
						<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="0:2,3:2"></div>
						<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="0:2,3:3"></div>
						<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="0:2,3:4"></div>
						<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="0:3,3:0"></div>
						<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="0:3,3:1"></div>
						<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="0:3,3:2"></div>
						<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="0:3,3:3"></div>
						<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="0:3,3:4"></div>
						<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="0:4,3:0"></div>
						<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="0:4,3:1"></div>
						<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="0:4,3:2"></div>
						<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="0:4,3:3"></div>
						<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="0:4,3:4"></div>
					</div>
					<div class="prop" style="--gr: 4; --gc: 10;" data-gauche="0" data-haut="2">
						<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="0:0,2:0"></div>
						<div class="cell" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="0:0,2:1"></div>
						<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="0:0,2:2"></div>
						<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="0:0,2:3"></div>
						<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="0:0,2:4"></div>
						<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="0:1,2:0"></div>
						<div class="cell" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="0:1,2:1"></div>
						<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="0:1,2:2"></div>
						<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="0:1,2:3"></div>
						<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="0:1,2:4"></div>
						<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="0:2,2:0"></div>
						<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="0:2,2:1"></div>
						<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="0:2,2:2"></div>
						<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="0:2,2:3"></div>
						<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="0:2,2:4"></div>
						<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="0:3,2:0"></div>
						<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="0:3,2:1"></div>
						<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="0:3,2:2"></div>
						<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="0:3,2:3"></div>
						<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="0:3,2:4"></div>
						<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="0:4,2:0"></div>
						<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="0:4,2:1"></div>
						<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="0:4,2:2"></div>
						<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="0:4,2:3"></div>
						<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="0:4,2:4"></div>
					</div>
					<div class="prop" style="--gr: 4; --gc: 16;" data-gauche="0" data-haut="1">
						<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="0:0,1:0"></div>
						<div class="cell" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="0:0,1:1"></div>
						<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="0:0,1:2"></div>
						<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="0:0,1:3"></div>
						<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="0:0,1:4"></div>
						<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="0:1,1:0"></div>
						<div class="cell" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="0:1,1:1"></div>
						<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="0:1,1:2"></div>
						<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="0:1,1:3"></div>
						<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="0:1,1:4"></div>
						<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="0:2,1:0"></div>
						<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="0:2,1:1"></div>
						<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="0:2,1:2"></div>
						<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="0:2,1:3"></div>
						<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="0:2,1:4"></div>
						<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="0:3,1:0"></div>
						<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="0:3,1:1"></div>
						<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="0:3,1:2"></div>
						<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="0:3,1:3"></div>
						<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="0:3,1:4"></div>
						<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="0:4,1:0"></div>
						<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="0:4,1:1"></div>
						<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="0:4,1:2"></div>
						<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="0:4,1:3"></div>
						<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="0:4,1:4"></div>
					</div>
					<div class="prop" style="--gr: 10; --gc: 4;" data-gauche="1" data-haut="3">
						<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="1:0,3:0"></div>
						<div class="cell" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="1:0,3:1"></div>
						<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="1:0,3:2"></div>
						<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="1:0,3:3"></div>
						<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="1:0,3:4"></div>
						<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="1:1,3:0"></div>
						<div class="cell" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="1:1,3:1"></div>
						<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="1:1,3:2"></div>
						<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="1:1,3:3"></div>
						<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="1:1,3:4"></div>
						<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="1:2,3:0"></div>
						<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="1:2,3:1"></div>
						<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="1:2,3:2"></div>
						<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="1:2,3:3"></div>
						<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="1:2,3:4"></div>
						<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="1:3,3:0"></div>
						<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="1:3,3:1"></div>
						<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="1:3,3:2"></div>
						<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="1:3,3:3"></div>
						<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="1:3,3:4"></div>
						<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="1:4,3:0"></div>
						<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="1:4,3:1"></div>
						<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="1:4,3:2"></div>
						<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="1:4,3:3"></div>
						<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="1:4,3:4"></div>
					</div>
					<div class="prop" style="--gr: 10; --gc: 10;" data-gauche="1" data-haut="2">
						<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="1:0,2:0"></div>
						<div class="cell" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="1:0,2:1"></div>
						<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="1:0,2:2"></div>
						<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="1:0,2:3"></div>
						<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="1:0,2:4"></div>
						<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="1:1,2:0"></div>
						<div class="cell" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="1:1,2:1"></div>
						<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="1:1,2:2"></div>
						<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="1:1,2:3"></div>
						<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="1:1,2:4"></div>
						<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="1:2,2:0"></div>
						<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="1:2,2:1"></div>
						<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="1:2,2:2"></div>
						<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="1:2,2:3"></div>
						<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="1:2,2:4"></div>
						<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="1:3,2:0"></div>
						<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="1:3,2:1"></div>
						<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="1:3,2:2"></div>
						<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="1:3,2:3"></div>
						<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="1:3,2:4"></div>
						<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="1:4,2:0"></div>
						<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="1:4,2:1"></div>
						<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="1:4,2:2"></div>
						<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="1:4,2:3"></div>
						<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="1:4,2:4"></div>
					</div>
					<div class="prop" style="--gr: 16; --gc: 4;" data-gauche="2" data-haut="3">
						<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="2:0,3:0"></div>
						<div class="cell" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="2:0,3:1"></div>
						<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="2:0,3:2"></div>
						<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="2:0,3:3"></div>
						<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="2:0,3:4"></div>
						<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="2:1,3:0"></div>
						<div class="cell" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="2:1,3:1"></div>
						<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="2:1,3:2"></div>
						<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="2:1,3:3"></div>
						<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="2:1,3:4"></div>
						<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="2:2,3:0"></div>
						<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="2:2,3:1"></div>
						<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="2:2,3:2"></div>
						<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="2:2,3:3"></div>
						<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="2:2,3:4"></div>
						<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="2:3,3:0"></div>
						<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="2:3,3:1"></div>
						<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="2:3,3:2"></div>
						<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="2:3,3:3"></div>
						<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="2:3,3:4"></div>
						<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="2:4,3:0"></div>
						<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="2:4,3:1"></div>
						<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="2:4,3:2"></div>
						<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="2:4,3:3"></div>
						<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="2:4,3:4"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="resultats" style="--nb-choices: 5;">
			<h2>Résultats</h2>
			<table>
				<tbody>
					<tr>
						<th>Sortie</th>
						<td data-solution="Première"></td>
						<td data-solution="Deuxième"></td>
						<td data-solution="Troisième"></td>
						<td data-solution="Quatrième"></td>
						<td data-solution="Cinquième"></td>
					</tr>
					<tr>
						<th>Lieu</th>
						<td data-solution="Parc"></td>
						<td data-solution="Plage"></td>
						<td data-solution="Champ"></td>
						<td data-solution="Son jardin"></td>
						<td data-solution="Jardin d'un ami"></td>
					</tr>
					<tr>
						<th>Objet</th>
						<td data-solution="Cuillère"></td>
						<td data-solution="Capsule"></td>
						<td data-solution="Jouet"></td>
						<td data-solution="Clé anglaise"></td>
						<td data-solution="Poignée"></td>
					</tr>
					<tr>
						<th>Durée</th>
						<td data-solution="15 minutes"></td>
						<td data-solution="25 minutes"></td>
						<td data-solution="40 minutes"></td>
						<td data-solution="35 minutes"></td>
						<td data-solution="20 minutes"></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="reference">Référence: Cube de jeux. #206</div>
	</div>
</template>

<script setup>
import axios from 'axios';
import Enigme from '../classes/Enigme.js';
import { ref } from 'vue';

// import { ref, reactive, computed, onMounted } from 'vue';
const props = defineProps({
	// ...
});
const enigme = ref(null);
axios.get('/derek.json').then(res => {
	console.log(Enigme.fromJson(res.data));
	enigme.value = Enigme.fromJson(res.data)
});
</script>

<style lang="scss">
.component {
	background-color: #fff;
}</style>