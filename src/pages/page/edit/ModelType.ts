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
    styleType: StyleType.self,
    components: [
      {
        type: 0,
        headline: {
          title: "第一个"
        }
      },
      {
        type: 0,
        headline: {
          title: "第二个"
        }
      },
      {
        type: 0,
        headline: {
          title: "第三个"
        }
      }
    ]
  },
  currentEditComponent: undefined,
};
