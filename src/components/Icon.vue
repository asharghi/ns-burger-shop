<script lang="ts" setup>
import {
  defineProps
} from "nativescript-vue";

defineProps({
  name: String,
  outlined: Boolean
})

</script>

<template>
  <Label :class="{ 'm-icon': true, outlined }" :text="name" />
</template>
