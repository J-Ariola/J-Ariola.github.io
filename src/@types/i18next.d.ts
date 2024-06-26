import resources from "./resources";

declare module "i18next" {
  interface CustomeTypeOptions {
    defaultNS: "translation",
    resources: typeof resources
  }
}