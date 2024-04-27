<template>
	<div class="grid" :style="{ '--nb-props': properties.length, '--nb-choices': nbChoices }">
		<div class="corner"></div>
		<header class="top">
			<div class="prop" v-for="i in properties.length - 1" :style="{ '--prop': properties.length - i - 1 }">
				<h1>{{ properties[properties.length - i].name }}</h1>
				<div class="choice" v-for="choice, j in properties[properties.length - i].choices" :style="{ '--choice': j }" v-html="choice.text"></div>
			</div>
		</header>
		<header class="left">
			<div class="prop" v-for="i in properties.length - 1" :style="{ '--prop': i }">
				<h1>{{ properties[i - 1].name }}</h1>
				<div class="choice" v-for="choice, j in properties[i - 1].choices" :style="{ '--choice': j }" v-html="choice.text"></div>
			</div>
		</header>
		<div class="cells">
			<template v-for="i in properties.length - 1">
				<template v-for="j in properties.length - i">
					<div class="group" :data-prop-top="i">
						<template v-for="v in nbChoices">
							<template v-for="w in nbChoices">
								<EnigmaCell :propTop="i" :propLeft="j" :top="v" :left="w" />
							</template>
						</template>
					</div>
				</template>
				<div class="group" v-for="j in i - 1"></div>
			</template>
		</div>
	</div>

</template>
<script setup>
//props
const props = defineProps({
	properties: Object,
});
const properties = ref([...props.properties]);
console.log(properties.value[0]);
const nbChoices = computed(() => properties.value[0].length);
function coordinates(cell, string = true) {
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

const evt = {
	click: (e) => {
		if (e.target.classList.contains("auto")) {
			return;
		}
		if (e.target.classList.contains("X") || e.target.classList.contains("O")) {
			return;
		} else {
			var coord = coordinates(e.target);
			console.log(coord);
			// if (e.ctrlKey) {
			// 	var op = "=";
			// 	this.cocher(e.target, false);
			// } else {
			// 	var op = "≠";
			// 	this.barrer(e.target, false);
			// }
			// this.trouverComplets();
			// var code = `${op};${coord}`;
			// this.ajouterAction(code, e.currentTarget);
			// console.log(e.currentTarget.action);
		}
		// this.mettreAJour();
	},
	mouseenter: (e) => {
		var li = e.target.action;
		if (!li) return;
		li.classList.add("hover");
	},
	mouseleave: (e) => {
		var li = e.target.action;
		if (!li) return;
		li.classList.remove("hover");
	},
}
function barrer(cell, auto = true) {
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
function cocher(cell, auto = true) {
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

</script>