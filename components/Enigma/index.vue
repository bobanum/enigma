<template>
	<div class="page">
		<!-- <div v-if="enigma.image" class="extra avant"><img class="avant" :src="'/' + enigma.image"></div> -->
		<h1>Énigme : {{ enigma.title }}</h1>
		<p class="intro" v-html="enigma.intro"></p>
		<div class="colonnes">
			<div class="indices">
				<h2>Les indices</h2>
				<ol>
					<EnigmaClue v-for="clue in enigma.clues" :clue="clue"></EnigmaClue>
				</ol>
			</div>
			<EnigmaGrid v-if="enigma.properties" :properties="enigma.properties"></EnigmaGrid>
		</div>
		<!-- <div class="reference">Référence: Le cube de jeux. #171</div>
		<div class="extra apres">
			<p class="truc note"><b>Truc:</b> Trouvez la boite qui contenait les 5000$.</p>
		</div> -->
	</div>
</template>
<script setup>
import { Property } from '~/src/Property.js';
const props = defineProps({
	enigma: Object
});
console.log(props.enigma);
// const enigma = reactive({
// 	title: computed(() => props.enigma.getAttribute('title')),
// 	intro: computed(() => props.enigma.querySelector('intro')?.innerHTML),
// 	image: computed(() => props.enigma.getAttribute('image')),
// 	clues: computed(() => props.enigma.querySelector('clues')?.children),
// 	properties: [],
// });
// enigma.properties = [...props.enigma.querySelector('props').children].map(p => Property.from(p));
// enigma.properties.forEach((p, i) => {
// 	p.choices.forEach(c => {
// 		c.addCellProperty(...enigma.properties.slice(i + 1))}
// 	);
// });
</script>