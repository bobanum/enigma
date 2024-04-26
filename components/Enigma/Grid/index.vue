<template>
	<div class="tableau" :style="{ '--nb-props': properties.length, '--nb-choices': nbChoices }">
		<div class="corner"></div>
		<div class="entete-h">
			<div class="prop" v-for="i in properties.length - 1" :style="{ '--prop': properties.length - i - 1 }">
				<h1>{{ attr(prop[properties.length - 1], "name") }}</h1>
				<div class="choice" v-for="choice, j in prop.children" :style="{ '--choice': j }" v-html="choice.innerHTML"></div>
			</div>
		</div>
		<!-- <div class="entete-v">
			<div class="prop" v-for="prop, i in [...properties].slice(0, -1)" :style="{ '--prop': i }">
				<h1>{{ attr(prop, "name") }}</h1>
				<div class="choice" v-for="choice, j in prop.children" :style="{ '--choice': j }" v-html="choice.innerHTML"></div>
			</div>
		</div> -->
		<div class="coches">
			<div>
				<div class="group" style="--gr: 4; --gc: 4;" data-gauche="0" data-haut="3">
					<div class="cell X" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="0:0,3:0" data-code="≠;0:0,3:0"></div>
					<div class="cell" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="0:0,3:1"></div>
					<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="0:0,3:2"></div>
					<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="0:0,3:3"></div>
					<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="0:0,3:4"></div>
					<div class="cell" style="--r: 0; --c: 5;" data-gauche="0" data-haut="5" data-coord="0:0,3:5"></div>
					<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="0:1,3:0"></div>
					<div class="cell X" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="0:1,3:1" data-code="≠;0:1,3:1"></div>
					<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="0:1,3:2"></div>
					<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="0:1,3:3"></div>
					<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="0:1,3:4"></div>
					<div class="cell" style="--r: 1; --c: 5;" data-gauche="1" data-haut="5" data-coord="0:1,3:5"></div>
					<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="0:2,3:0"></div>
					<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="0:2,3:1"></div>
					<div class="cell X" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="0:2,3:2" data-code="≠;0:2,3:2"></div>
					<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="0:2,3:3"></div>
					<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="0:2,3:4"></div>
					<div class="cell" style="--r: 2; --c: 5;" data-gauche="2" data-haut="5" data-coord="0:2,3:5"></div>
					<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="0:3,3:0"></div>
					<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="0:3,3:1"></div>
					<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="0:3,3:2"></div>
					<div class="cell X" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="0:3,3:3" data-code="≠;0:3,3:3"></div>
					<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="0:3,3:4"></div>
					<div class="cell" style="--r: 3; --c: 5;" data-gauche="3" data-haut="5" data-coord="0:3,3:5"></div>
					<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="0:4,3:0"></div>
					<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="0:4,3:1"></div>
					<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="0:4,3:2"></div>
					<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="0:4,3:3"></div>
					<div class="cell X" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="0:4,3:4" data-code="≠;0:4,3:4"></div>
					<div class="cell" style="--r: 4; --c: 5;" data-gauche="4" data-haut="5" data-coord="0:4,3:5"></div>
					<div class="cell" style="--r: 5; --c: 0;" data-gauche="5" data-haut="0" data-coord="0:5,3:0"></div>
					<div class="cell" style="--r: 5; --c: 1;" data-gauche="5" data-haut="1" data-coord="0:5,3:1"></div>
					<div class="cell" style="--r: 5; --c: 2;" data-gauche="5" data-haut="2" data-coord="0:5,3:2"></div>
					<div class="cell" style="--r: 5; --c: 3;" data-gauche="5" data-haut="3" data-coord="0:5,3:3"></div>
					<div class="cell" style="--r: 5; --c: 4;" data-gauche="5" data-haut="4" data-coord="0:5,3:4"></div>
					<div class="cell X" style="--r: 5; --c: 5;" data-gauche="5" data-haut="5" data-coord="0:5,3:5" data-code="≠;0:5,3:5"></div>
				</div>
				<div class="group" style="--gr: 4; --gc: 11;" data-gauche="0" data-haut="2">
					<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="0:0,2:0"></div>
					<div class="cell" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="0:0,2:1"></div>
					<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="0:0,2:2"></div>
					<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="0:0,2:3"></div>
					<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="0:0,2:4"></div>
					<div class="cell" style="--r: 0; --c: 5;" data-gauche="0" data-haut="5" data-coord="0:0,2:5"></div>
					<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="0:1,2:0"></div>
					<div class="cell X auto" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="0:1,2:1"></div>
					<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="0:1,2:2"></div>
					<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="0:1,2:3"></div>
					<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="0:1,2:4"></div>
					<div class="cell" style="--r: 1; --c: 5;" data-gauche="1" data-haut="5" data-coord="0:1,2:5"></div>
					<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="0:2,2:0"></div>
					<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="0:2,2:1"></div>
					<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="0:2,2:2"></div>
					<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="0:2,2:3"></div>
					<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="0:2,2:4"></div>
					<div class="cell" style="--r: 2; --c: 5;" data-gauche="2" data-haut="5" data-coord="0:2,2:5"></div>
					<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="0:3,2:0"></div>
					<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="0:3,2:1"></div>
					<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="0:3,2:2"></div>
					<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="0:3,2:3"></div>
					<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="0:3,2:4"></div>
					<div class="cell" style="--r: 3; --c: 5;" data-gauche="3" data-haut="5" data-coord="0:3,2:5"></div>
					<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="0:4,2:0"></div>
					<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="0:4,2:1"></div>
					<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="0:4,2:2"></div>
					<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="0:4,2:3"></div>
					<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="0:4,2:4"></div>
					<div class="cell" style="--r: 4; --c: 5;" data-gauche="4" data-haut="5" data-coord="0:4,2:5"></div>
					<div class="cell" style="--r: 5; --c: 0;" data-gauche="5" data-haut="0" data-coord="0:5,2:0"></div>
					<div class="cell" style="--r: 5; --c: 1;" data-gauche="5" data-haut="1" data-coord="0:5,2:1"></div>
					<div class="cell" style="--r: 5; --c: 2;" data-gauche="5" data-haut="2" data-coord="0:5,2:2"></div>
					<div class="cell" style="--r: 5; --c: 3;" data-gauche="5" data-haut="3" data-coord="0:5,2:3"></div>
					<div class="cell" style="--r: 5; --c: 4;" data-gauche="5" data-haut="4" data-coord="0:5,2:4"></div>
					<div class="cell" style="--r: 5; --c: 5;" data-gauche="5" data-haut="5" data-coord="0:5,2:5"></div>
				</div>
				<div class="group" style="--gr: 4; --gc: 18;" data-gauche="0" data-haut="1">
					<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="0:0,1:0"></div>
					<div class="cell" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="0:0,1:1"></div>
					<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="0:0,1:2"></div>
					<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="0:0,1:3"></div>
					<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="0:0,1:4"></div>
					<div class="cell" style="--r: 0; --c: 5;" data-gauche="0" data-haut="5" data-coord="0:0,1:5"></div>
					<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="0:1,1:0"></div>
					<div class="cell" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="0:1,1:1"></div>
					<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="0:1,1:2"></div>
					<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="0:1,1:3"></div>
					<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="0:1,1:4"></div>
					<div class="cell" style="--r: 1; --c: 5;" data-gauche="1" data-haut="5" data-coord="0:1,1:5"></div>
					<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="0:2,1:0"></div>
					<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="0:2,1:1"></div>
					<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="0:2,1:2"></div>
					<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="0:2,1:3"></div>
					<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="0:2,1:4"></div>
					<div class="cell" style="--r: 2; --c: 5;" data-gauche="2" data-haut="5" data-coord="0:2,1:5"></div>
					<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="0:3,1:0"></div>
					<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="0:3,1:1"></div>
					<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="0:3,1:2"></div>
					<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="0:3,1:3"></div>
					<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="0:3,1:4"></div>
					<div class="cell" style="--r: 3; --c: 5;" data-gauche="3" data-haut="5" data-coord="0:3,1:5"></div>
					<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="0:4,1:0"></div>
					<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="0:4,1:1"></div>
					<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="0:4,1:2"></div>
					<div class="cell X" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="0:4,1:3" data-code="≠;0:4,1:3"></div>
					<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="0:4,1:4"></div>
					<div class="cell" style="--r: 4; --c: 5;" data-gauche="4" data-haut="5" data-coord="0:4,1:5"></div>
					<div class="cell" style="--r: 5; --c: 0;" data-gauche="5" data-haut="0" data-coord="0:5,1:0"></div>
					<div class="cell" style="--r: 5; --c: 1;" data-gauche="5" data-haut="1" data-coord="0:5,1:1"></div>
					<div class="cell" style="--r: 5; --c: 2;" data-gauche="5" data-haut="2" data-coord="0:5,1:2"></div>
					<div class="cell" style="--r: 5; --c: 3;" data-gauche="5" data-haut="3" data-coord="0:5,1:3"></div>
					<div class="cell" style="--r: 5; --c: 4;" data-gauche="5" data-haut="4" data-coord="0:5,1:4"></div>
					<div class="cell" style="--r: 5; --c: 5;" data-gauche="5" data-haut="5" data-coord="0:5,1:5"></div>
				</div>
				<div class="group" style="--gr: 11; --gc: 4;" data-gauche="1" data-haut="3">
					<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="1:0,3:0"></div>
					<div class="cell X" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="1:0,3:1" data-code="≠;1:0,3:1"></div>
					<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="1:0,3:2"></div>
					<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="1:0,3:3"></div>
					<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="1:0,3:4"></div>
					<div class="cell" style="--r: 0; --c: 5;" data-gauche="0" data-haut="5" data-coord="1:0,3:5"></div>
					<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="1:1,3:0"></div>
					<div class="cell X" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="1:1,3:1" data-code="≠;1:1,3:1"></div>
					<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="1:1,3:2"></div>
					<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="1:1,3:3"></div>
					<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="1:1,3:4"></div>
					<div class="cell" style="--r: 1; --c: 5;" data-gauche="1" data-haut="5" data-coord="1:1,3:5"></div>
					<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="1:2,3:0"></div>
					<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="1:2,3:1"></div>
					<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="1:2,3:2"></div>
					<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="1:2,3:3"></div>
					<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="1:2,3:4"></div>
					<div class="cell" style="--r: 2; --c: 5;" data-gauche="2" data-haut="5" data-coord="1:2,3:5"></div>
					<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="1:3,3:0"></div>
					<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="1:3,3:1"></div>
					<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="1:3,3:2"></div>
					<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="1:3,3:3"></div>
					<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="1:3,3:4"></div>
					<div class="cell" style="--r: 3; --c: 5;" data-gauche="3" data-haut="5" data-coord="1:3,3:5"></div>
					<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="1:4,3:0"></div>
					<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="1:4,3:1"></div>
					<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="1:4,3:2"></div>
					<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="1:4,3:3"></div>
					<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="1:4,3:4"></div>
					<div class="cell" style="--r: 4; --c: 5;" data-gauche="4" data-haut="5" data-coord="1:4,3:5"></div>
					<div class="cell" style="--r: 5; --c: 0;" data-gauche="5" data-haut="0" data-coord="1:5,3:0"></div>
					<div class="cell" style="--r: 5; --c: 1;" data-gauche="5" data-haut="1" data-coord="1:5,3:1"></div>
					<div class="cell" style="--r: 5; --c: 2;" data-gauche="5" data-haut="2" data-coord="1:5,3:2"></div>
					<div class="cell" style="--r: 5; --c: 3;" data-gauche="5" data-haut="3" data-coord="1:5,3:3"></div>
					<div class="cell" style="--r: 5; --c: 4;" data-gauche="5" data-haut="4" data-coord="1:5,3:4"></div>
					<div class="cell" style="--r: 5; --c: 5;" data-gauche="5" data-haut="5" data-coord="1:5,3:5"></div>
				</div>
				<div class="group" style="--gr: 11; --gc: 11;" data-gauche="1" data-haut="2">
					<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="1:0,2:0"></div>
					<div class="cell X auto" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="1:0,2:1"></div>
					<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="1:0,2:2"></div>
					<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="1:0,2:3"></div>
					<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="1:0,2:4"></div>
					<div class="cell" style="--r: 0; --c: 5;" data-gauche="0" data-haut="5" data-coord="1:0,2:5"></div>
					<div class="cell" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="1:1,2:0"></div>
					<div class="cell X auto" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="1:1,2:1"></div>
					<div class="cell" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="1:1,2:2"></div>
					<div class="cell" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="1:1,2:3"></div>
					<div class="cell" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="1:1,2:4"></div>
					<div class="cell" style="--r: 1; --c: 5;" data-gauche="1" data-haut="5" data-coord="1:1,2:5"></div>
					<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="1:2,2:0"></div>
					<div class="cell" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="1:2,2:1"></div>
					<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="1:2,2:2"></div>
					<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="1:2,2:3"></div>
					<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="1:2,2:4"></div>
					<div class="cell" style="--r: 2; --c: 5;" data-gauche="2" data-haut="5" data-coord="1:2,2:5"></div>
					<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="1:3,2:0"></div>
					<div class="cell" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="1:3,2:1"></div>
					<div class="cell X" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="1:3,2:2" data-code="≠;1:3,2:2"></div>
					<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="1:3,2:3"></div>
					<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="1:3,2:4"></div>
					<div class="cell" style="--r: 3; --c: 5;" data-gauche="3" data-haut="5" data-coord="1:3,2:5"></div>
					<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="1:4,2:0"></div>
					<div class="cell" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="1:4,2:1"></div>
					<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="1:4,2:2"></div>
					<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="1:4,2:3"></div>
					<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="1:4,2:4"></div>
					<div class="cell" style="--r: 4; --c: 5;" data-gauche="4" data-haut="5" data-coord="1:4,2:5"></div>
					<div class="cell" style="--r: 5; --c: 0;" data-gauche="5" data-haut="0" data-coord="1:5,2:0"></div>
					<div class="cell" style="--r: 5; --c: 1;" data-gauche="5" data-haut="1" data-coord="1:5,2:1"></div>
					<div class="cell" style="--r: 5; --c: 2;" data-gauche="5" data-haut="2" data-coord="1:5,2:2"></div>
					<div class="cell" style="--r: 5; --c: 3;" data-gauche="5" data-haut="3" data-coord="1:5,2:3"></div>
					<div class="cell" style="--r: 5; --c: 4;" data-gauche="5" data-haut="4" data-coord="1:5,2:4"></div>
					<div class="cell" style="--r: 5; --c: 5;" data-gauche="5" data-haut="5" data-coord="1:5,2:5"></div>
				</div>
				<div class="group" style="--gr: 18; --gc: 4;" data-gauche="2" data-haut="3">
					<div class="cell" style="--r: 0; --c: 0;" data-gauche="0" data-haut="0" data-coord="2:0,3:0"></div>
					<div class="cell X auto" style="--r: 0; --c: 1;" data-gauche="0" data-haut="1" data-coord="2:0,3:1"></div>
					<div class="cell" style="--r: 0; --c: 2;" data-gauche="0" data-haut="2" data-coord="2:0,3:2"></div>
					<div class="cell" style="--r: 0; --c: 3;" data-gauche="0" data-haut="3" data-coord="2:0,3:3"></div>
					<div class="cell" style="--r: 0; --c: 4;" data-gauche="0" data-haut="4" data-coord="2:0,3:4"></div>
					<div class="cell" style="--r: 0; --c: 5;" data-gauche="0" data-haut="5" data-coord="2:0,3:5"></div>
					<div class="cell X auto" style="--r: 1; --c: 0;" data-gauche="1" data-haut="0" data-coord="2:1,3:0"></div>
					<div class="cell O" style="--r: 1; --c: 1;" data-gauche="1" data-haut="1" data-coord="2:1,3:1" data-code="=;2:1,3:1"></div>
					<div class="cell X auto" style="--r: 1; --c: 2;" data-gauche="1" data-haut="2" data-coord="2:1,3:2"></div>
					<div class="cell X auto" style="--r: 1; --c: 3;" data-gauche="1" data-haut="3" data-coord="2:1,3:3"></div>
					<div class="cell X auto" style="--r: 1; --c: 4;" data-gauche="1" data-haut="4" data-coord="2:1,3:4"></div>
					<div class="cell X auto" style="--r: 1; --c: 5;" data-gauche="1" data-haut="5" data-coord="2:1,3:5"></div>
					<div class="cell" style="--r: 2; --c: 0;" data-gauche="2" data-haut="0" data-coord="2:2,3:0"></div>
					<div class="cell X auto" style="--r: 2; --c: 1;" data-gauche="2" data-haut="1" data-coord="2:2,3:1"></div>
					<div class="cell" style="--r: 2; --c: 2;" data-gauche="2" data-haut="2" data-coord="2:2,3:2"></div>
					<div class="cell" style="--r: 2; --c: 3;" data-gauche="2" data-haut="3" data-coord="2:2,3:3"></div>
					<div class="cell" style="--r: 2; --c: 4;" data-gauche="2" data-haut="4" data-coord="2:2,3:4"></div>
					<div class="cell" style="--r: 2; --c: 5;" data-gauche="2" data-haut="5" data-coord="2:2,3:5"></div>
					<div class="cell" style="--r: 3; --c: 0;" data-gauche="3" data-haut="0" data-coord="2:3,3:0"></div>
					<div class="cell X auto" style="--r: 3; --c: 1;" data-gauche="3" data-haut="1" data-coord="2:3,3:1"></div>
					<div class="cell" style="--r: 3; --c: 2;" data-gauche="3" data-haut="2" data-coord="2:3,3:2"></div>
					<div class="cell" style="--r: 3; --c: 3;" data-gauche="3" data-haut="3" data-coord="2:3,3:3"></div>
					<div class="cell" style="--r: 3; --c: 4;" data-gauche="3" data-haut="4" data-coord="2:3,3:4"></div>
					<div class="cell" style="--r: 3; --c: 5;" data-gauche="3" data-haut="5" data-coord="2:3,3:5"></div>
					<div class="cell" style="--r: 4; --c: 0;" data-gauche="4" data-haut="0" data-coord="2:4,3:0"></div>
					<div class="cell X auto" style="--r: 4; --c: 1;" data-gauche="4" data-haut="1" data-coord="2:4,3:1"></div>
					<div class="cell" style="--r: 4; --c: 2;" data-gauche="4" data-haut="2" data-coord="2:4,3:2"></div>
					<div class="cell" style="--r: 4; --c: 3;" data-gauche="4" data-haut="3" data-coord="2:4,3:3"></div>
					<div class="cell" style="--r: 4; --c: 4;" data-gauche="4" data-haut="4" data-coord="2:4,3:4"></div>
					<div class="cell" style="--r: 4; --c: 5;" data-gauche="4" data-haut="5" data-coord="2:4,3:5"></div>
					<div class="cell" style="--r: 5; --c: 0;" data-gauche="5" data-haut="0" data-coord="2:5,3:0"></div>
					<div class="cell X auto" style="--r: 5; --c: 1;" data-gauche="5" data-haut="1" data-coord="2:5,3:1"></div>
					<div class="cell" style="--r: 5; --c: 2;" data-gauche="5" data-haut="2" data-coord="2:5,3:2"></div>
					<div class="cell" style="--r: 5; --c: 3;" data-gauche="5" data-haut="3" data-coord="2:5,3:3"></div>
					<div class="cell" style="--r: 5; --c: 4;" data-gauche="5" data-haut="4" data-coord="2:5,3:4"></div>
					<div class="cell" style="--r: 5; --c: 5;" data-gauche="5" data-haut="5" data-coord="2:5,3:5"></div>
				</div>
			</div>
		</div>
	</div>

</template>

<script setup>
//props
const props = defineProps({
	properties: Object,
});
const properties = ref([...props.properties]);
const nbChoices = computed(() => [...properties[0].children].length);
function attr(obj, key) {
	return obj.getAttribute(key);
}
function choices(obj, selector) {
	return document.querySelectorAll(selector);
}
</script>