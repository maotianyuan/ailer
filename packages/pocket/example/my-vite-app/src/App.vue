<script setup>
import { random, cloneDeep } from '@ailer/pocket';

const triggerCloneDeep = () => {
  const obj = {
    a: 1,
    b: 2,
    c: {
      d: 1
    }
  }
  const target = cloneDeep(obj)
  obj.a = 'modify'
  console.log(target);

  const value = random(1, 20)
  console.log(value)
}
</script>

<template>
  <div>
    <button @click="triggerCloneDeep">CloneDeep</button>
  </div>
</template>

<style scoped>

</style>
