<template>
	<div class="cell" @click="evt.click"></div>
</template>
<script setup>
//props
const props = defineProps({
	top: Object,
	left: Object,
});
const evt = {
	click: (e) => {
		console.log(e);
		if (e.target.classList.contains("auto")) {
			return;
		}
		if (e.target.classList.contains("X") || e.target.classList.contains("O")) {
			return;
		} else {
			console.log(props);
			// var coord = coordinates(e.target);
			// console.log(coord);
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
}
</script>