import { Reducer, Dispatch } from "redux";
import { Effect } from "dva";
import { namespace, pageEdit, PageEdit } from "@/pages/page/edit/ModelType";
import { newPageComponents } from "@/pages/page/type/pageComponents";
import deepCopy from "@/utils/deepCopy";
import { History } from "history";
import { fetchPage, updatePage } from "@/pages/page/edit/service";
import getQueryByName from "@/utils/getQueryByName";
import { routerRedux } from "dva";
import { ConnectState } from "@/models/connect";
import { Page } from "@/pages/page/type/page";
import { Modal } from "antd";
import { CheckOutlined } from "@ant-design/icons/lib";
import React from "react";


export interface ModelType {
  namespace: string;
  state: PageEdit;
  subscriptions: any;
  effects: {
    fetchPage: Effect;
    goToManage: Effect;
    updatePage: Effect;
  };
  reducers: {
    save: Reducer<PageEdit>;
    savePage: Reducer<PageEdit>;
    addComponent: Reducer<PageEdit>;
    editComponent: Reducer<PageEdit>;
    dragComponent: Reducer<PageEdit>;
    deleteComponent: Reducer<PageEdit>;
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
      const page: Page = yield call(fetchPage, id);
      yield put({
        type: "save",
        payload: {
          page
        }
      });
    },
    * goToManage(_, {put}) {
      yield put(routerRedux.push("/page/manage"));
    },
    * updatePage({payload}, {call, select}) {
      const page = yield select(
        (state: ConnectState) => state.pageEdit.page
      );
      if (page) {
        yield call(updatePage, page);
        Modal.confirm({
          title: "保存成功",
          icon: <CheckOutlined />,
          content: "恭喜本次修改成功！",
          okText: "返回上一页",
          cancelText: "继续编辑",
          onOk() {
            payload.dispatch({
              type: `${namespace}/goToManage`
            });
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }
    }
  },
  reducers: {
    save(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    },
    savePage(state = pageEdit, {payload}) {
      return {
        ...state,
        page: {
          ...state?.page,
          ...payload
        }
      };
    },
    addComponent(state = pageEdit, {payload}) {
      const page = deepCopy(state?.page);
      const {type, position} = payload;
      if (page) {
        if (!Array.isArray(page.components)) {
          page.components = [];
        }
        const index = position ?? page.components.length;
        page.components.splice(index + 1, 0, newPageComponents(type));
      }
      return {
        ...state,
        page,
      };
    },
    editComponent(state = pageEdit, {payload}) {
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
    dragComponent(state = pageEdit, {payload}) {
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
          page,
          dragStart: null,
          dragEnd: null
        };
      }
      return {
        ...state
      };
    },
    deleteComponent(state = pageEdit) {
      const page = deepCopy(state.page);
      if (page?.components && state.dragStart !== null) {
        page.components.splice(state.dragStart, 1);
      }

      return {
        ...state,
        page,
        dragStart: null,
        dragEnd: null
      };
    }
  }
};

export default Model;
