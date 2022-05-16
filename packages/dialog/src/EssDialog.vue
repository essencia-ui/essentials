<template>
  <!-- <Teleport to="body"> -->
  <Transition name="dialog">
    <div
      v-show="visible"
      class="overlay"
      role="dialog"
      aria-modal="true"
      aria-live="assertive"
      aria-labelledby="dialog-title"
    >
      <div class="dialog">
        <slot name="title" id="dialog-title" />
        <slot
          name="close"
          class="close-dialog"
          aria-label="Close"
          @click="close"
        />
        <slot></slot>
      </div>
    </div>
  </Transition>
  <!-- </Teleport> -->
  <slot name="trigger" />
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref, Slot } from "vue";

export default defineComponent({
  name: "EssDialog",
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, context) {
    const visible: Ref<boolean> = ref(true);
    const trigger: Ref<any> = ref(null);
    // const visible: Ref<boolean> = ref(props.opened ?? false);

    const open: Function = () => {
      console.log("CAIU");
      visible.value = true;
    };

    const close: Function = () => {
      visible.value = false;
    };

    onMounted(() => {
      const t = context.slots.trigger()[0];
      console.log(t.);
    });

    return {
      visible,
      trigger,
      open,
      close,
    };
  },
});
</script>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}

.dialog {
  padding: 24px;
  background: white;
}

.dialog-enter-from {
  opacity: 0;
}

.dialog-leave-to {
  opacity: 0;
}

.dialog-enter-from .dialog,
.dialog-leave-to .dialog {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
