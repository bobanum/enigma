<template>
	<div class="page">
		<!-- <div v-if="enigma.image" class="extra avant"><img class="avant" :src="'/' + enigma.image"></div> -->
		<h1>Énigme : {{ enigma.title }}</h1>
		<p class="intro" v-html="enigma.intro"></p>
		<div class="colonnes">
			<div class="clues">
				<h2>Les indices</h2>
				<ol>
					<EnigmaClue v-for="clue of enigma.clues" :clue="clue"></EnigmaClue>b
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
const props = defineProps({
	enigma: Object
});
console.log(props.enigma.clues);
</script>