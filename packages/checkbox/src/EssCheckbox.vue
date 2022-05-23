<template>
  <label>
    <slot></slot>
    <input type="checkbox" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssCheckbox",
});
</script>
