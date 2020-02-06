import { Reducer } from "redux";
import { routerRedux } from "dva";
import { Effect } from "@/type/Effect";
import { namespace, pageEdit, PageEdit } from "@/pages/page/edit/ModelType";
import { newPageComponents } from "@/pages/page/type/pageComponents";
import deepCopy from "@/utils/deepCopy";


export interface ModelType {
  namespace: string;
  state: PageEdit;
  effects: {
    goToEdit: Effect<PageEdit>;
  };
  reducers: {
    save: Reducer<PageEdit>;
    savePage: Reducer<PageEdit>;
    addComponent: Reducer<PageEdit>;
    editComponent: Reducer<PageEdit>;
    dragComponent: Reducer<PageEdit>;
  };
}

const Model: ModelType = {
  namespace,
  state: pageEdit,
  effects: {
    * goToEdit({payload}, {put}) {
      yield put(routerRedux.push(`/page/edit?id=${payload?.id}`));
    }
  },
  reducers: {
    save(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    },
    savePage(state, {payload}) {
      return {
        ...state,
        page: {
          ...state?.page,
          ...payload
        }
      };
    },
    addComponent(state, {payload}) {
      const page = deepCopy(state?.page);
      if (page) {
        page.components.push(newPageComponents(payload.type));
      }
      return {
        ...state,
        page,
      };
    },
    editComponent(state, {payload}) {
      if (state?.page?.components) {
        const page = deepCopy(state?.page);
        if (state?.currentEditComponent !== undefined) {
          const list = page.components;
          list[state.currentEditComponent] = payload;
        }
        return {
          ...state,
          page
        };
      }
      return {
        ...state
      };
    },
    dragComponent(state, {payload}) {
      if (state && state.page?.components) {
        const page = deepCopy(state.page);
        const pageMiddle = deepCopy(page.components[payload.dragStart]);
        page.components[payload.dragStart] = page.components[payload.dragEnd];
        page.components[payload.dragEnd] = pageMiddle;
        return {
          ...state,
          page
        };
      }
      return {
        ...state
      };
    }
  }
};

export default Model;
