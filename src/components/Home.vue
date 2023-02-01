<script lang="ts" setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  $navigateTo,
} from "nativescript-vue";
import Icon from "./Icon.vue";
import CategoryItem from "./CategoryItem.vue";

const categories = ref(['All', '🍖 Meats item', '🍳', '🦐', '🍕', '🍦']);
const selectedCategoryIndex = ref(1);

function setSelectCategoryIndex(index: number) {
  selectedCategoryIndex.value = index;
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
      <StackLayout iosOverflowSafeArea="false">
        <GridLayout rows="auto" columns="auto, *, auto" margin="0 20">
          <Image width="70" src="~/assets/avatar.png" />
          <ContentView col="2" borderRadius="40" borderWidth="2" borderColor="#F5F4F4">
            <Icon name="menu" margin="0 20" />
          </ContentView>
        </GridLayout>

        <Label text="Let's find &#xa;food near you" margin="20" fontSize="30" textWrap="true" />
        <GridLayout padding="20" borderRadius="15" background="#F4F3F1" rows="auto" columns="auto,*,auto" margin="0 20">
          <Icon name="search" col="0" marginRight="10" />
          <TextField hint="Search" hintColor="red" :style="{ 'placeholder-color': '#5F5E64' }" col="1" />
          <Icon name="filter_alt" :outlined="true" marginLeft="10" col="2" />
        </GridLayout>
        <ScrollView marginTop="10" orientation="horizontal" :scrollBarIndicatorVisible="false">
          <StackLayout orientation="horizontal" padding="20">
            <CategoryItem :key="index" v-for="(categoryName, index) in categories" :name="categoryName"
              :selected="selectedCategoryIndex === index" @tap="setSelectCategoryIndex(index)" />
          </StackLayout>
        </ScrollView>
        <GridLayout rows="auto" margin="20" columns="auto,*,auto">
          <Label text="Popular items" />
          <Label col="2" text="View more" color="#EB764A" fontSize="12" />
        </GridLayout>
        <ScrollView orientation="horizontal" :scrollBarIndicatorVisible="false">

        </ScrollView>
      </StackLayout>
    </Page>
  </Frame>
</template>
