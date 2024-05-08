<template>
	<div class="action">
		<div>
			<div v-for="cell of action.cells"><i>({{cell.choices[0].property.name}}) "{{cell.choices[0].text}}"</i><b>{{ action.icon }}</b><i>"{{cell.choices[1].text}}" ({{cell.choices[1].property.name}})</i></div>
		</div>
		<button class="delete"></button>
		<button class="visibility"></button>
	</div>
</template>
<script setup>
// import Action from '~/src/Action.js';
const props = defineProps({
	action: Object
});
console.log(props.action.cells[0]);
</script>