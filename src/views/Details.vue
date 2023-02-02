<script lang="ts" setup>
import {ref} from "nativescript-vue";
import {Item} from "~/types";
import Icon from "~/components/Icon.vue";
import PlusMinus from "~/components/PlusMinus.vue";
import ImageParallax from "~/components/ImageParallax.vue";
import {PropType} from "vue";


const {item} = defineProps({
  item: Object as PropType<Item>
})

const counterItems = ref(1)
</script>

<template>
  <Page actionBarHidden="true" class="bg-[#FCFBFC]">
    <GridLayout rows="auto, auto, auto, auto, auto, *" class="pt-10 px-4 text-center">
      <Label row="0" :text="item.title" class="text-3xl"></Label>
      <Label row="1" :text="item.subtitle" class="text-lg mt-1 text-gray-400"></Label>
      <GridLayout row="2" class="px-1 py-1">
        <ImageParallax
            v-if="item.imgParallax"
            class="my-12"
            :dataImages="item.imgParallax">
        </ImageParallax>
        <Image v-else :src="item.img" class="my-12"/>
        <ContentView verticalAlignment="top" horizontalAlignment="right" class="box-shadow rounded-full">
          <Icon text="favorite" fontSize="28" class="p-3 color-primary"></Icon>
        </ContentView>
        <PlusMinus verticalAlignment="bottom" horizontalAlignment="right" v-model="counterItems"
                   class="pr-1"></PlusMinus>
      </GridLayout>

      <FlexboxLayout row="3" class="justify-center mt-8 text-lg">
        <FlexboxLayout class="items-center mx-2">
          <Icon text="schedule" class="color-primary"></Icon>
          <Label :text="item.properties.duration" class="ml-1"></Label>
        </FlexboxLayout>
        <FlexboxLayout class="items-center mx-2">
          <Icon text="local_fire_department" class="color-primary"></Icon>
          <Label :text="item.properties.calories"></Label>
        </FlexboxLayout>
        <FlexboxLayout class="items-center mx-2">
          <Icon text="star_outline" class="color-primary"></Icon>
          <Label :text="item.properties.punctuation"></Label>
        </FlexboxLayout>
      </FlexboxLayout>
      <Label row="4" textWrap="true" :text="item.description" class="mt-6 text-left text-gray-400 text-base"
             style="line-height: 4"></Label>
      <FlexboxLayout row="5" verticalAlignment="bottom" class="py-6 justify-between items-center">
        <Label :text="`${item.price}$`" class="text-4xl"></Label>

        <FlexboxLayout class="px-6 py-4 mr-4 bg-primary rounded-3xl box-shadow_primary">
          <Icon text="shopping_bag" class="bg-white p-2 rounded-full color-primary"></Icon>
        </FlexboxLayout>
      </FlexboxLayout>
    </GridLayout>
  </Page>
</template>
