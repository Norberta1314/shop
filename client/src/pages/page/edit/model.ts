import { Reducer, Dispatch } from "redux";
import { Effect } from "@/type/Effect";
import { namespace, pageEdit, PageEdit } from "@/pages/page/edit/ModelType";
import { newPageComponents } from "@/pages/page/type/pageComponents";
import deepCopy from "@/utils/deepCopy";
import { History } from "history";
import { fetchPage, updatePage } from "@/pages/page/edit/service";
import getQueryByName from "@/utils/getQueryByName";
import { routerRedux } from "dva";


export interface ModelType {
  namespace: string;
  state: PageEdit;
  subscriptions: any;
  effects: {
    fetchPage: Effect<PageEdit>;
    goToManage: Effect<PageEdit>;
    updatePage: Effect<PageEdit>;
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
  subscriptions: {
    setup({dispatch, history}: { dispatch: Dispatch<any>; history: History }) {
      return history.listen(({pathname, search}) => {
        console.log(pathname, search);
        if (pathname === "/page/edit") {
          const id = getQueryByName(search, "id");
          dispatch({
            type: "fetchPage",
            payload: {
              id
            }
          });
        }
      });
    }
  },
  effects: {
    * fetchPage({payload}, {call, put}) {
      const {id} = payload;
      const data = yield call(fetchPage, id);
      yield put({
        type: "save",
        payload: {
          page: data.data
        }
      });
    },
    * goToManage(_, {put}) {
      yield put(routerRedux.push("/page/manage"));
    },
    * updatePage(_, {call, select}) {
      const page = yield select(
        (state) => state.pageEdit.page
      );
      console.log(page);
      yield call(updatePage, page);
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
        const {dragStart, dragEnd} = payload;
        const pageMiddle = deepCopy(page.components[dragStart]);
        if (dragStart > dragEnd) {
          page.components.splice(dragStart, 1);
          page.components.splice(dragEnd + 1, 0, pageMiddle);
        } else if (dragStart < dragEnd) {
          page.components.splice(dragEnd + 1, 0, pageMiddle);
          page.components.splice(payload.dragStart, 1);
        }
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
