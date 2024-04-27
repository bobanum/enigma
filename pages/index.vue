<template>
	<main>
		<Enigma v-if="enigma" :enigma="enigma" />
	</main>
</template>
<script setup>
import EnigmaClass from '~/src/Enigma.js';
const enigma = ref(null);
onMounted(() => {
  fetch('/data/pandore.xml').then(response => response.text()).then(xmlString => {
	  // Create a new DOMParser
	  const parser = new DOMParser();
	  
	  // Parse the XML string
	  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
	  enigma.value = EnigmaClass.from(xmlDoc.firstChild);
  });
});
</script>