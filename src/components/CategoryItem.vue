<template>
	<GridLayout :class="{ 'shadow': !selected }" rows="auto" marginRight="10" :background="background"
		:padding="name.length === 2 ? '5 10' : '20 25'" borderRadius="30">
		<Label verticalAlignment="center" :text="name" :fontSize="name.length === 2 ? 34 : 14" :color="color"
			:fontWeight="selected ? 'normal' : 'bold'" />
	</GridLayout>
</template>
<script lang="ts" setup>
import { computed } from "nativescript-vue";
const props = defineProps({
	name: {
		type: String,
		required: true
	},
	selected: Boolean
});
const background = computed(() => {
	return props.selected ? "#EB764A" : "white";
});
const color = computed(() => {
	return props.selected ? "white" : "#0C0C1C";
});

</script>

<style>
.ns-ios .shadow {
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.shadow {
	box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
}
</style>