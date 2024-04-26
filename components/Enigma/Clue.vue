<template>
	<li>
		<span class="part" v-for="part in clue.parts" v-html="part.innerHTML"></span>
	</li>
</template>

<script setup>
const props = defineProps({
	clue: Object,
});
const clue = reactive({
	parts: computed(() => [...props.clue?.children||[]]),
});
[...props.clue.querySelectorAll("ref")].forEach(ref => {
	const span = document.createElement("span");
	span.classList.add("ref");
	span.setAttribute("data-prop", ref.getAttribute("prop"));
	span.innerHTML = ref.innerHTML;
	ref.replaceWith(span);
});
</script>