import { Page, StyleType } from "@/pages/page/type/page";

export const namespace = "pageEdit";

export interface PageEdit {
  page?: Page;
  currentEditComponent?: number;
}

export const pageEdit: PageEdit = {
  page: {
    id: 0,
    title: "",
    previewImg: "",
    styleType: StyleType.default,
    components: [
      {
        type: 0,
        headline: {
          title: "xz"
        }
      }
    ]
  },
  currentEditComponent: undefined,
};
