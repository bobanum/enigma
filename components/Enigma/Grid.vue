<template>
	<div class="grid" :style="{ '--nb-props': properties.length, '--nb-choices': nbChoices }">
		<div class="corner"></div>
		<header class="top">
			<div class="prop" v-for="prop in propsTop">
				<h1>{{ prop.name }}</h1>
				<div class="choice" v-for="choice in prop.choices" v-html="choice.text"></div>
			</div>
		</header>
		<header class="left">
			<div class="prop" v-for="prop in propsLeft">
				<h1>{{ prop.name }}</h1>
				<div class="choice" v-for="choice, j in prop.choices" v-html="choice.text"></div>
			</div>
		</header>
		<div class="cells">
			<template v-for="propLeft, i in propsLeft">
				<template v-for="propTop in propsTop.slice(0, propsLeft.length - i)">
					<div class="group">
						<!-- {{ console.log('groupe', propLeft.id, propTop.id) }} -->
						<template v-for="[idLeft, choiceLeft] of propLeft.choices">
							<template v-for="[idTop, choiceTop] of propTop.choices">
								<!-- {{ console.log(choiceLeft.path, choiceTop.path) }} -->
								<!-- {{ console.log(choiceLeft.cells.get(choiceTop.path))}} -->
								<EnigmaCell :cell="choiceLeft.cells.get(choiceTop.path)">
								</EnigmaCell>

								<!-- a{{ propTop.choices.length }} -->
								<!-- {{ console.log(choiceTop.path, choiceLeft.cells.get(choiceTop.path)) }} -->
								<!-- <EnigmaCell :cell="choiceLeft.cells.get(choiceTop.path)">
								</EnigmaCell> -->
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
const properties = props.properties;
const nbChoices = computed(() => properties.v(0).choices.length);
const propsTop = computed(() => properties.v().slice(1).reverse());
const propsLeft = computed(() => properties.v().slice(0, -1));
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