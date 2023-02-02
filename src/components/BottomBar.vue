<script lang="ts" setup>
import { computed } from "nativescript-vue";
import Icon from "./Icon.vue";

const props = defineProps({
  selectedIndex: Number
});

</script>
<template>
  <GridLayout columns="*">
    <GridLayout marginBottom="10" verticalAlignment="bottom" iosOverflowSafeArea="false" rows="auto,auto,1"
      columns="*,*,100,*,*">
      <Icon fontSize="25" name="home" color="#EB764A" horizontalAlignment="center" />
      <Icon fontSize="25" name="favorite_border" :outlined="true" col="1" horizontalAlignment="center"
        color="#CBCACE" />

      <Icon fontSize="25" name="notifications" :outlined="true" col="3" horizontalAlignment="center" color="#CBCACE" />
      <Icon fontSize="25" name="shopping_bag" :outlined="true" col="4" horizontalAlignment="center" color="#CBCACE" />
      <ContentView marginTop="5" row="1" width="5" height="5" borderRadius="10" background="#EB764A" />

    </GridLayout>
    <GridLayout rows="100" columns="*,100,*">

      <ContentView col="1" width="60" height="60" horizontalAlignment="center" background="#EB764A"
        class="box-shadow_primary" borderRadius="60">
        <Icon fontSize="25" name="search" color="white" verticalAlignment="center" horizontalAlignment="center" />
      </ContentView>
    </GridLayout>
  </GridLayout>


</template>

