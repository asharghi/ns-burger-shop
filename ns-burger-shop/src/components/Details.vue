<script lang="ts" setup>
import { ref, $navigateBack } from "nativescript-vue";

const items = ref(
  Array(1000)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`)
);
</script>

<template>
  <Page>
    <StackLayout height="100%">
      <ListView :items="items" separatorColor="transparent" class="bg-transparent">
        <template #default="{ item }">
          <GridLayout columns="*, auto" padding="20">
            <Label :text="item" />
            <ContentView col="1" />
          </GridLayout>
        </template>
      </ListView>
    </StackLayout>
  </Page>
</template>
