import { Dispatch, Reducer } from "redux";
// import { History } from "history";
import { routerRedux } from "dva";
import { Effect } from "@/type/Effect";
import { namespace, goodManage, GoodManage } from "@/pages/good/manage/modeType";
import { fetchGoodList, insertGood, updateGood } from "@/pages/good/manage/service";
import { History } from "history";


export interface ModelType {
  namespace: string;
  state: GoodManage;
  subscriptions: any;
  effects: {
    goToEdit: Effect<GoodManage>;
    insertGood: Effect<GoodManage>;
    updateGood: Effect<GoodManage>;
    fetGoodList: Effect<GoodManage>;
  };
  reducers: {
    save: Reducer<GoodManage>;
  };
}

const Model: ModelType = {
  namespace: namespace,
  state: goodManage,
  subscriptions: {
    setup({dispatch, history}: { dispatch: Dispatch<any>; history: History }) {
      return history.listen(({pathname}) => {
        if (pathname === "/good/manage") {
          dispatch({
            type: "fetGoodList",
          });
        }
      });
    }
  },
  effects: {
    * goToEdit({payload}, {put}) {
      yield put(routerRedux.push(`/page/edit?id=${payload?.id}`));
    },
    * fetGoodList(_, {call, put}) {
      const data = yield call(fetchGoodList);
      console.log(data);
      yield put({
        type: "save",
        payload: {
          goodList: data
        }
      });
    },
    * insertGood({payload}, {call, put}) {
      const {data} = payload;
      yield call(insertGood, data);
      yield put({
        type: "save",
        payload: {
          showAddGoodModel: false
        }
      });
    },
    * updateGood({payload}, {call, put}) {
      yield call(updateGood, payload.data);
      yield put({
        type: "save",
        payload: {
          showAddGoodModel: false,
          editGood: null
        }
      });
      payload.dispatch({
        type: `${namespace}/fetGoodList`,
      });
    }
  },
  reducers: {
    save(state, {payload}) {
      console.log("save", payload);
      return {
        ...state,
        ...payload
      };
    }
  }
};

export default Model;
