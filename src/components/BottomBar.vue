
<script lang="ts" setup>
import { defineProps, computed } from "nativescript-vue";
import Icon from "./Icon.vue";

const props = defineProps({
  selectedIndex: Number
});

</script>
<template>
  <GridLayout iosOverflowSafeArea="false" rows="auto,auto,1" columns="*,*,100,*,*">
    <Icon fontSize="25" name="home" color="#EB764A" horizontalAlignment="center" marginTop="20" />
    <Icon fontSize="25" name="favorite_border" :outlined="true" col="1" horizontalAlignment="center" color="#CBCACE"
      marginTop="20" />
    <ContentView col="2" padding="20" horizontalAlignment="center">
      <ContentView width="60" height="60" background="#EB764A" class="search-shadow" borderRadius="60">
        <Icon fontSize="25" name="search" color="white" horizontalAlignment="center" />
      </ContentView>
    </ContentView>
    <Icon fontSize="25" name="notifications" :outlined="true" col="3" horizontalAlignment="center" color="#CBCACE"
      marginTop="20" />
    <Icon fontSize="25" name="shopping_bag" :outlined="true" col="4" horizontalAlignment="center" color="#CBCACE"
      marginTop="20" />
    <ContentView marginTop="5" row="1" width="5" height="5" borderRadius="10" background="#EB764A" />

  </GridLayout>
</template>
<style>
.search-shadow {
  box-shadow: 0 20px 20px rgb(255, 176, 147)
}
</style>
