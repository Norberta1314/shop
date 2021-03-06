import React from "react";
import styles from "../index.less";
import { Button, Col, Row } from "antd";
import { FontSizeOutlined } from "@ant-design/icons/lib";
import { connect } from "dva";
import { namespace, PageEdit } from "@/pages/page/edit/ModelType";
import { Page } from "@/pages/page/type/page";
import { Dispatch } from "redux";
import { Loading } from "@/models/connect";
import PickColor from "./setting/components/common/PickColor";

interface Props {
  page: Page;
  dispatch?: Dispatch<any>;
  updateLoading?: boolean;
}

const Header: React.FC<Props> = (props) => {
  const {page, dispatch, updateLoading} = props;

  function goToManage() {
    if (dispatch) {
      dispatch({
        type: `${namespace}/goToManage`,
      });
    }
  }

  function updatePage() {
    if (dispatch) {
      dispatch({
        type: `${namespace}/updatePage`,
        payload: {
          dispatch
        }
      });
    }
  }

  function handleChangePage(attribute: string, e: any) {
    if (dispatch) {
      dispatch({
        type: `${namespace}/save`,
        payload: {
          page: {
            ...page,
            [attribute]: e
          }
        }
      });
    }
  }

  return (
    <header className={styles.header}>
      <Row align="middle">
        <Col offset={1}>
          <div className={styles.leftBlock}>
            <div className={styles.titleBlock}>
              <FontSizeOutlined />
              <span className={styles.title}>{page?.title}</span>
            </div>

            <PickColor
              label="背景颜色"
              value={page?.backgroundColor}
              onChangeInput={(e) => handleChangePage("backgroundColor", e)} />
          </div>
        </Col>
        <Col flex="auto">
          <div className={styles.buttonGroup}>
            <Button
              onClick={goToManage}
              className={styles.button}>取消</Button>
            <Button
              loading={updateLoading}
              onClick={updatePage}
              className={`${styles.button} ${styles.buttonSave}`}
              type="primary">保存</Button>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default connect(
  ({pageEdit, loading}: { pageEdit: PageEdit; loading: Loading }) => ({
    page: pageEdit.page,
    updateLoading: loading.effects[`${namespace}/updatePage`]
  }))(Header);
