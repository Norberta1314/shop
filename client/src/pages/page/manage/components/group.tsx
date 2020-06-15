import React, { useState } from "react";
import styles from "../index.less";
import PageCard from "@/pages/page/manage/components/Card";
import { Page } from "@/pages/page/type/page";
import { Card, Form, Input, Select } from "antd";
import ReactIf from "@/components/ReactIf";
import { Modal } from "antd";
import { Dispatch } from "redux";

const layout = {
  labelCol: {span: 4},
  wrapperCol: {span: 16},
};

const Option = [{
  value: 0,
  label: "空模板"
}, {
  value: 1,
  label: "首页"
}, {
  value: 2,
  label: "关于我们"
}];

interface Props {
  title: String;
  list?: Page[];
  hasAdd: Boolean;
  dispatch?: Dispatch<any>;
  refresh: () => void;
}

const Group = ({title, list, hasAdd, dispatch, refresh}: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [form] = Form.useForm();

  function insertPage() {
    const data = form.getFieldsValue();
    if (dispatch) {
      dispatch({
        type: "pageManage/insert",
        payload: {
          data
        }
      });
      setShowModal(false);
      setTimeout(() => {
        refresh();
      }, 1000);
    }
  }

  return (
    <div className={styles.group}>
      <div>{title}</div>
      <div className={styles.container}>
        <ReactIf vIf={hasAdd}>
          <div className={styles.addCard}>
            <Card style={{width: 200}}>
              <span
                className={styles.addIcon}
                onClick={() => setShowModal(true)}>+</span>
            </Card>
          </div>
        </ReactIf>
        {
          list?.map((item) => (<PageCard
            refresh={refresh}
            key={item.id}
            page={item} />))
        }
      </div>

      <Modal
        title="添加页面"
        visible={showModal}
        cancelText="取消"
        okText="确定"
        onOk={insertPage}
        onCancel={() => setShowModal(false)}>
        <Form {...layout} form={form}
              name="control-hooks">
          <Form.Item
            label="页面名称"
            name="title">
            <Input />
          </Form.Item>
          <Form.Item
            label="默认模版"
            name="styleType">
            <Select options={Option} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Group;
