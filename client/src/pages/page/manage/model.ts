import { Reducer } from "redux";
// import { History } from "history";
import { routerRedux } from "dva";
import { Effect } from "@/type/Effect";
import { deletePage, insertPages } from "@/pages/page/manage/service";

export interface PageManage {

}

export interface ModelType {
  namespace: string;
  state: PageManage;
  // subscriptions: any;
  effects: {
    goToEdit: Effect<PageManage>;
    insert: Effect<PageManage>;
    delete: Effect<PageManage>;
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
    },
    * insert({payload}, {call}) {
      const {data} = payload;
      console.log(payload);
      yield call(insertPages, data);
    },
    * delete({payload}, {call}) {
      const {id} = payload;
      yield call(deletePage, id);
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
