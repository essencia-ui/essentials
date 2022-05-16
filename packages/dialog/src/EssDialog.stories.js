import EssDialog from "./EssDialog.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/EssDialog",
  component: EssDialog,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EssDialog },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <EssDialog v-bind="args">
      <template #title><h1> Accessible Modal Dialog </h1></template>
      <p> To close click a button, Escape, or outside this dialog. </p>
      <template #close><button> Close </button></template>
      <template #trigger><button> Click to open dialog </button></template>
    </EssDialog>
    <h1>This is a dialog</h1>
    <!-- <button> Click to open dialog </button> -->
    <!-- <template #trigger><button> Click to open dialog </button></template> -->
  `,
});

export const Default = Template.bind({});

// // More on args: https://storybook.js.org/docs/vue/writing-stories/args
// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: "EssDialog",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "EssDialog",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "EssDialog",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "EssDialog",
// };
