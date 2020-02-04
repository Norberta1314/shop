import { Page, StyleType } from "@/pages/page/type/page";

export interface PageEdit {
  page: Page;
}

export const pageEdit: PageEdit = {
  page: {
    id: 0,
    title: '',
    previewImg: '',
    styleType: StyleType.default
  },
};
