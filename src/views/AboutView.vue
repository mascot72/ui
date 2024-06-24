<template>
  <h1>This is an about page</h1>
  <ChildComponent :sendProps1="title" :sendProps2="createAt" />
  <slot>
    <div :class="{ red: true }">
      <div>이제 나를 볼 수 있어요!</div>
      <div @click="notYetClick">아직 이에요!</div>
    </div>
  </slot>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from '../components/ChildComponent.vue'

const title = ref('부모 컴포넌트에서 선언한 데이터입니다.')
const createAt = 2024
const notYetClick = (evt: MouseEvent) => {
  console.log(evt)
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<!-- // export default {
  //   components: {
  //     ChildComponent,
  //   },
  //   data() {
  //     return {
  //       title: '부모 컴포넌트에서 선언한 데이터입니다.',
  //       createAt: 2024,
  //     }
  //   },
  // } -->
