<template>
	<GridLayout :class="{ 'shadow': !selected }" rows="auto" marginRight="10" :background="background" padding="20 25"
		borderRadius="30">
		<Label :text="name" fontSize="14" :color="color" />
	</GridLayout>
</template>
<script lang="ts" setup>
import { computed } from "nativescript-vue";
const props = defineProps({
	name: String,
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