<template>

  <button @click="increment">증가</button>
  <label>{{ cnt }}</label>
</template>

<script setup>
import { ref, computed, onUpdated, onMounted } from 'vue'
import { useStore } from 'vuex'
const count = ref(0)

onMounted(() => {
  console.log('mounted')
})

const cnt = computed(()=> store.state.count)

const store = useStore()
const increment = (evt) => {
  store.dispatch('increment')
  // count.value++
}

// onUpdated(() => {
//   // count = computed(() => store.state.count)
// })
// export default {
//   data() {
//     return {
//       count: 0
//     }
//   },
//   methods: {
//     increment() {
//       this.count++
//     }
//   },
//   mounted() {
//     // 메서드는 생명 주기 훅 또는 다른 메서드에서 호출할 수 있습니다!
//     this.increment()
//   }
// }
</script>

<stype lang="scss" scoped></stype>
