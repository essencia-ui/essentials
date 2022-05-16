import EssDialog from "./EssDialog.vue";

export default {
  install: (app: any) => {
    return app.component("EssDialog", EssDialog);
  },
};
