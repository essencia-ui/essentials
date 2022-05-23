import EssButton from "./EssButton.vue";

export default {
  install: (app: any) => {
    return app.component("EssButton", EssButton);
  },
};
