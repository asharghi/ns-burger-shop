<template>
	<GridLayout rows="auto" marginLeft="20" marginBottom="40" width="200">
		<ContentView class="product-shadow" borderRadius="40" verticalAlignment="bottom" marginTop="50">
			<StackLayout margin="20" marginTop="70">
				<Label :text="item.title" fontWeight="bold" textAlignment="center" />
				<Label :text="item.description" textAlignment="center" color="gray" fontSize="14" marginTop="5" />
				<Label :text="`${item.price}$`" textWrap="true" textAlignment="center" marginTop="20" fontWeight="bold"
					fontSize="22" />
			</StackLayout>
		</ContentView>
		<GridLayout verticalAlignment="top" rows="auto">
			<Image :src="item.img" width="200" />
		</GridLayout>
	</GridLayout>
</template>
<script lang="ts" setup>
const props = defineProps({
	item: {
		type: Object,
		required: true
	}
});
</script>

<style>
.ns-ios .product-shadow {
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.product-shadow {
	box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
}
</style>