<template>
	<div class="cell" :class="[cell.state, cell.auto ? 'auto' : null]" @click="evt.click">
		<slot></slot>{{ cell.matches.length * 100 + cell.actions.length }}
	</div>
</template>
<script setup>
const props = defineProps({
	cell: Object,
});
const cell = reactive(props.cell);

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
	},
};
function strike() {
	cell.strike();
}
function check() {
	cell.check();
}
</script>