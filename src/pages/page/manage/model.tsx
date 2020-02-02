import { Effect } from "@/type/Effect";
import { Reducer } from "redux";
// import { History } from "history";
import { routerRedux } from "dva";

export interface PageManage {

}

export interface ModelType {
  namespace: string;
  state: PageManage;
  // subscriptions: any;
  effects: {
    goToEdit: Effect<PageManage>;
  };
  reducer: {
    save: Reducer<PageManage>;
  };
}

const Model: ModelType = {
  namespace: 'pageManage',
  state: {},
  // subscriptions: {
  //   setup({dispatch, history}: { dispatch: Dispatch<any>; history: History }) {
  //     return history.listen(({pathname, search}) => {
  //       console.log(pathname, search)
  //       // dispatch({
  //       //   type: 'save',
  //       //   payload: {
  //       //
  //       //   }
  //       // })
  //     })
  //   }
  // },
  effects: {
    * goToEdit({payload}, {_, put}) {
      yield put(routerRedux.push(`/page/edit?id=${payload?.id}`))
    }
  },
  reducer: {
    save(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
};

export default Model;