import EssCheckbox from "./EssCheckbox.vue";

export default { component: EssCheckbox };

const Template = (args: any) => ({
  components: { EssCheckbox },
  setup() {
    return { args };
  },
  template: `
    <EssCheckbox v-bind="args">
      Checkbox Label
    </EssCheckbox>
  `,
});

export const Default = Template.bind({});
