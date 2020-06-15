import React, { useEffect, useState } from "react";
import styles from "../index.less";
import { Button, Col, Input, InputNumber, Modal, Row, Form } from "antd";
import ImageManage from "@/pages/page/edit/components/setting/components/common/ImageManage";
import { Dispatch } from "redux";
import { connect } from "dva";
import { namespace } from "@/pages/good/manage/modeType";
import { Good } from "@/pages/good/type/good";

interface Props {
  dispatch?: Dispatch<any>;
  showAddGoodModel: boolean;
  editGood: Good | null;
}

const layout = {
  labelCol: {span: 4},
  wrapperCol: {span: 16},
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  },
};
const Index: React.FC<Props> = (props) => {
  const [form] = Form.useForm();
  const {dispatch, showAddGoodModel, editGood} = props;
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (showAddGoodModel) {
      form.setFieldsValue({
        title: editGood?.title,
        brand: editGood?.brand,
        imgUrl: editGood?.imgUrl,
        stock: editGood?.stock,
        price: editGood?.price,
        info: editGood?.info
      });

    }
  }, [showAddGoodModel]);

  function confirmAddGood(values: any) {
    if (dispatch) {
      if (editGood) {
        dispatch({
          type: `${namespace}/updateGood`,
          payload: {
            data: {
              ...editGood,
              ...values
            },
            dispatch: dispatch
          }
        });
      } else {
        dispatch({
          type: `${namespace}/insertGood`,
          payload: {
            data: values
          }
        });
      }

    }
  }

  function handleChangeModel(value: boolean) {
    if (dispatch) {
      dispatch({
        type: `${namespace}/save`,
        payload: {
          showAddGoodModel: value,
          editGood: null
        }
      });
    }
  }

  function handleChangeImage(value: any) {
    console.log("change image", value, typeof value, value === undefined);
    if (typeof value === "string" || value === undefined) {
      console.log("dingding");
      form.setFieldsValue({imgUrl: value});
      setImage(value);
    }
  }

  return (
    <div className={styles.operateWarp}>
      <Row>
        <Col offset={20}>
          <Button
            className={styles.button}
            onClick={() => {
              handleChangeModel(true);
            }}>添加商品</Button>
        </Col>
      </Row>

      <Modal
        title={editGood ? "编辑商品" : "添加商品"}
        visible={showAddGoodModel}
        footer={null}
        onCancel={() => handleChangeModel(false)}>
        <Form {...layout}
              form={form}
              name="control-hooks"
              onFinish={confirmAddGood}>
          <Form.Item
            name="title"
            label="商品名称">
            <Input />
          </Form.Item>
          <Form.Item
            name="brand"
            label="品牌">
            <Input />
          </Form.Item>
          <Form.Item
            name="imgUrl"
            label="图片">
            <ImageManage
              imgNumber={1}
              fileList={image || editGood?.imgUrl || ""}
              onChangeImage={handleChangeImage} />
          </Form.Item>
          <Form.Item
            name="price"
            label="价格">
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="stock"
            label="库存">
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="info"
            label="备注">
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              className={styles.buttonClose}
              onClick={() => handleChangeModel(false)}>取消</Button>
            <Button
              htmlType="submit"
              type="primary">确定</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default connect()(Index);
