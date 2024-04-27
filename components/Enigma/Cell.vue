<template>
	<div class="cell" :class="[cell.state, cell.auto ? 'auto' : null]" @click="evt.click">
		<slot></slot>
	</div>
</template>
<script setup>
const props = defineProps({
	cell: Object,
});
const cell = reactive(props.cell);
// const state = computed({
// 	get: () => props.cell.state,
// 	set: (value) => {
// 		props.cell.state = value;
// 	}
// });

const auto = ref(false);
const evt = {
	click: (e) => {
		if (cell.state != null || cell.auto) return;

		if (e.ctrlKey) {
			// 	var op = "=";
			check();
		} else {
			// var op = "≠";
			strike();
		}
		// this.trouverComplets();
		// var code = `${op};${coord}`;
		// this.ajouterAction(code, e.currentTarget);
		// console.log(e.currentTarget.action);
		// this.mettreAJour();
	},
};
function strike() {
	cell.state = "X";
	// var coord = this.coord(cell, false);
	// ON ELIMINE LES BARREE
	// this.eliminerCorrespondantsBarre(coord);
	// ON COCHE LES COCHEES
}
function check(auto = true) {
	cell.state = "O";
	var coord = this.coord(cell, false);
	// ON ÉLIMINE LA CASE
	// this.eliminerVoisins(coord);
	// ON ELIMINE LES BARREE
	// this.eliminerCorrespondantsCoche(coord);
	// ON COCHE LES COCHEES

}
</script>