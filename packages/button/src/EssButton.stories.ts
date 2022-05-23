import EssButton from "./EssButton.vue";

export default { component: EssButton };

const Template = (args: any) => ({
  components: { EssButton },
  setup() {
    return { args };
  },
  template: `
    <EssButton v-bind="args">
      Button Text
    </EssButton>
  `,
});

export const Default = Template.bind({});
