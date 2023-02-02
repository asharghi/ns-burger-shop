<script lang="ts" setup>
import Icon from "@/components/Icon.vue"

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1
  }
})

defineEmits(['update:modelValue'])

</script>

<template>
  <GridLayout>
    <Icon @tap="$emit('update:modelValue', (props.modelValue + 1))" verticalAlignment="top"
          horizontalAlignment="right" text="add" class="p-2 bg-white rounded-full box-shadow"></Icon>
    <Icon @tap="$emit('update:modelValue', (props.modelValue - 1))" verticalAlignment="bottom"
          horizontalAlignment="right" text="remove" class="p-2 bg-white rounded-full box-shadow"></Icon>
    <Label :text="props.modelValue" class="text-2xl px-6 py-5 bg-white rounded-full box-shadow color-primary"
           translateX="-25"></Label>
  </GridLayout>
</template>
