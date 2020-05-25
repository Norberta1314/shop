import { Reducer } from "redux";
// import { History } from "history";
import { routerRedux } from "dva";
import { Effect } from "@/type/Effect";

export interface PageManage {

}

export interface ModelType {
  namespace: string;
  state: PageManage;
  // subscriptions: any;
  effects: {
    goToEdit: Effect<PageManage>;
  };
  reducers: {
    save: Reducer<PageManage>;
  };
}

const Model: ModelType = {
  namespace: "pageManage",
  state: {},
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
    }
  }
};

export default Model;
