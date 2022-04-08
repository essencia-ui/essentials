import EssButton from "./EssButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "EssButton",
  component: EssButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EssButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ess-button v-bind="args" />',
});

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/vue/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'EssButton',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'EssButton',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'EssButton',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'EssButton',
// };
