<template>
  <button class="ess">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: String
  },
  setup(props) {
    props.label // <-- type: string
  }
})
</script>

<style>
button.ess {
  background: blue
}
</style>
