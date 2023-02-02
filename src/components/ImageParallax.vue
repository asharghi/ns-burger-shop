<script lang="ts" setup>
import {onMounted, PropType} from 'vue';
import {AccelerometerData, startAccelerometerUpdates} from "@triniwiz/nativescript-accelerometer";
import {reactive} from "nativescript-vue";
import {DataImagesParallax} from "~/types";

const props = defineProps({
  dataImages: Object as PropType<DataImagesParallax>,
});
const dataAccelerometer = reactive({
  x: 0,
  y: 0
})

onMounted(() => {
  let currentX = 0;
  let currentY = 0;
  startAccelerometerUpdates(
      (data: AccelerometerData) => {
        currentX += 0.04 * (data.x - currentX)
        currentY += 0.04 * (data.y - currentY)
        dataAccelerometer.x = currentX;
        dataAccelerometer.y = currentY;
      },
      {
        sensorDelay: 'game',
      }
  );
});
</script>

<template>
  <GridLayout class="" v-if="dataAccelerometer">
    <Image
        stretch="aspectFill"
        :translateX="dataAccelerometer.x * 20"
        :src="props.dataImages.back"
    >
    </Image>
    <Image
        translateY="-25"
        stretch="aspectFill"
        :translateX="dataAccelerometer.x * -8"
        :src="props.dataImages.front"
    >
    </Image>
<!--    <GridLayout class="mask radius"></GridLayout>
    <GridLayout class="mask"></GridLayout>-->
  </GridLayout>
</template>

<style>
.parallax {
  margin-bottom: 40;
}

.radius {
  border-radius: 40;
}

.mask {
  border-width: 20;
  border-color: white;
}

.radius {
  border-radius: 40;
}
</style>
