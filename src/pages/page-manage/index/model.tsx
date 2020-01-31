import { Effect } from "@/type/Effect";
import { Reducer, Dispatch } from "redux";
import { History } from "history";

export interface PageManage {

}

export interface ModelType {
  namespace: string;
  state: PageManage;
  subscriptions: any;
  effects: {};
  reducer: {
    save: Reducer<PageManage>;
  };
}

const Model: ModelType = {
  namespace: 'pageManage',
  state: {},
  subscriptions: {
    setup({dispatch, history}: { dispatch: Dispatch<any>; history: History }) {
      return history.listen(({pathname, search}) => {
        console.log(pathname, search)
        // dispatch({
        //   type: 'save',
        //   payload: {
        //
        //   }
        // })
      })
    }
  },
  effects: {},
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
