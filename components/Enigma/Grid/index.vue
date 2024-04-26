<template>
	<div class="grid" :style="{ '--nb-props': properties.length, '--nb-choices': nbChoices }">
		<div class="corner"></div>
		<header class="top">
			<div class="prop" v-for="i in properties.length - 1" :style="{ '--prop': properties.length - i - 1 }">
				<h1>{{ properties[properties.length - i].name }}</h1>
				<div class="choice" v-for="choice, j in properties[properties.length - i].choices" :style="{ '--choice': j }" v-html="choice.text"></div>
			</div>
		</header>
		<header class="left">
			<div class="prop" v-for="i in properties.length - 1" :style="{ '--prop': i }">
				<h1>{{ properties[i - 1].name }}</h1>
				<div class="choice" v-for="choice, j in properties[i - 1].choices" :style="{ '--choice': j }" v-html="choice.text"></div>
			</div>
		</header>
		<div class="cells">
			<template v-for="i in properties.length - 1">
				<template v-for="j in properties.length - i">
					<div class="group" style="--gr: 4; --gc: 4;" data-gauche="0" data-haut="3">
						<template v-for="v in nbChoices">
							<template v-for="w in nbChoices">
								<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="0:0,3:0" data-code="≠;0:0,3:0"></div>
							</template>
						</template>
					</div>
				</template>
				<div class="group" v-for="j in i-1"></div>
			</template>
		</div>
	</div>

</template>
<script setup>
//props
const props = defineProps({
	properties: Object,
});
const properties = ref([...props.properties]);
console.log(properties.value[0]);
const nbChoices = computed(() => properties.value[0].length);

</script>