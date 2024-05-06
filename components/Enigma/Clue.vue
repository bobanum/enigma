<template>
	<li>
		<span class="part" v-for="part in clue.parts" v-html="part.toString()"></span>
	</li>
</template>

<script setup>
const props = defineProps({
	clue: Object,
});
// console.log(props.clue);
</script>