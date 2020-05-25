import { Page, PageMode, StyleType } from "@/pages/page/type/page";
import { Dispatch } from "redux";
import deepCopy from "@/utils/deepCopy";
import { PageComponentsType } from "@/pages/page/type/pageComponents";

export const namespace = "pageEdit";

export interface PageEdit {
  page?: Page;
  currentEditComponent?: number;
  dragEnd: number | null;
  dragStart: number | null;
}

export const pageEdit: PageEdit = {
  page: {
    id: 0,
    title: "",
    previewImg: "",
    styleType: StyleType.self,
    mode: PageMode.self,
    components: [],
  },
  currentEditComponent: undefined,
  dragEnd: null,
  dragStart: null
};

declare type FirstUpperCase = (e: string) => string
export const firstUpperCase: FirstUpperCase = ([first, ...rest]) => (`${first.toLowerCase()}${rest.join("")}`);

export function changeEditCompoennt(dispatch: Dispatch<any>, origin: any, attribute: string, e: any, type: number) {
  const local = deepCopy(origin);
  if (local) {
    local[attribute] = e;
  }
  const name = firstUpperCase(PageComponentsType[type]);
  // console.log(PageComponentsType[type], name);
  dispatch({
    type: `${namespace}/editComponent`,
    payload: {
      type,
      [name]: local
    }
  });
};

