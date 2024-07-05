<template>
	<div class="action">
		<div>
			<div v-for="cell of action.cells">
				<i><span class="property">({{cell.choices[0].property.name}})</span> <span class="choice">"{{cell.choices[0].text}}"</span></i>
				<b>{{ action.icon }}</b>
				<i><span class="choice">"{{cell.choices[1].text}}"</span> <span class="property">({{cell.choices[1].property.name}})</span></i>
			</div>
		</div>
		<button class="delete" @click="clickDelete"></button>
		<button class="visibility" @click="clickVisibility"></button>
	</div>
</template>
<script setup>
// import Action from '~/src/Action.js';
const props = defineProps({
	action: Object
});
console.log(props.action.cells[0]);
function clickDelete() {
	props.action.delete();
}
function clickVisibility() {
	props.action.visibility();
}
</script>
<style>
.property {
	display: none;
}
</style>