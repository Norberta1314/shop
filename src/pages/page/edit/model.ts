import { Effect } from "@/type/Effect";
import { Reducer } from "redux";
// import { History } from "history";
import { routerRedux } from "dva";
import { pageEdit, PageEdit } from "@/pages/page/edit/ModelType";


export interface ModelType {
  namespace: string;
  state: PageEdit;
  // subscriptions: any;
  effects: {
    goToEdit: Effect<PageEdit>;
  };
  reducers: {
    save: Reducer<PageEdit>;
    savePage: Reducer<PageEdit>;
  };
}

const Model: ModelType = {
  namespace: "pageEdit",
  state: pageEdit,
  effects: {
    * goToEdit({payload}, {_, put}) {
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
    }
  }
};

export default Model;
