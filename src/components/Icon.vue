<script lang="ts" setup>
defineProps({
  name: String,
  outlined: Boolean
})

</script>

<template>
  <Label :class="{ 'm-icon': true, outlined }" :text="name" />
</template>
