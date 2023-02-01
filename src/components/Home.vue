<script lang="ts" setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  $navigateTo,
} from "nativescript-vue";
import Details from "./Details.vue";

const counter = ref(0);
const message = computed(() => {
  return `Blank {N}-Vue app: ${counter.value}`;
});

function addToCounter() {
  counter.value++;
}

onMounted(() => {
  console.log("mounted");
});

onUnmounted(() => {
  console.log("unmounted");
});

</script>

<template>
  <Frame>
    <Page actionBarHidden="true">
      <StackLayout>
        <GridLayout rows="auto" columns="*, auto, *">

        </GridLayout>
        <Label text="Let's find food near you" />
        <GridLayout rows="auto" columns="auto,*,auto">

        </GridLayout>
        <ScrollView orientation="horizontal">

        </ScrollView>
        <GridLayout columns="auto,*,auto">
          <Label text="Popular Restaurants" />
          <Label col="2" text="View more" />
        </GridLayout>
        <ScrollView orientation="horizontal">

        </ScrollView>
      </StackLayout>
    </Page>
  </Frame>
</template>
