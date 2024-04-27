<template>
	<div class="grid" :style="{ '--nb-props': properties.length, '--nb-choices': nbChoices }">
		<div class="corner"></div>
		<header class="top">
			<div class="prop" v-for="prop in properties.slice(1).reverse()">
				<h1>{{ prop.name }}</h1>
				<div class="choice" v-for="choice in prop.choices" v-html="choice.text"></div>
			</div>
		</header>
		<header class="left">
			<div class="prop" v-for="prop in properties.slice(0, -1)">
				<h1>{{ prop.name }}</h1>
				<div class="choice" v-for="choice, j in prop.choices" v-html="choice.text"></div>
			</div>
		</header>
		<div class="cells">
			<template v-for="propLeft, i in properties.slice(0, -1)">
				<template v-for="propTop in properties.slice(i + 1).reverse()">
					<div class="group">
						<template v-for="choiceLeft in propLeft.choices">
							<template v-for="cell in choiceLeft.cells[propTop.id]">
								<EnigmaCell :cell="cell">
								</EnigmaCell>
							</template>
						</template>
					</div>
				</template>
				<div class="group" v-for="j in i"></div>
			</template>
		</div>
	</div>

</template>
<script setup>
//props
const props = defineProps({
	properties: Object,
});
const properties = ref(props.properties);
console.log(props.properties, properties.value);
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
			// 	this.check(e.target, false);
			// } else {
			// 	var op = "≠";
			// 	this.strike(e.target, false);
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
};

</script>