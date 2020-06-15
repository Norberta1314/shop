import React from "react";
import InputText from "../common/InputText";
import ImageManage from "../common/ImageManage";
import { Notification } from "@/pages/page/type/component/Notification";
import deepCopy from "@/utils/deepCopy";
import { namespace } from "@/pages/page/edit/ModelType";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import { Dispatch } from "redux";
import { connect } from "dva";
import commonStyle from "@/pages/page/edit/components/setting/index.less";
import { Col, Row } from "antd";
import PickColor from "@/pages/page/edit/components/setting/components/common/PickColor";

interface Props {
  notification: Notification;
  dispatch?: Dispatch<any>;
}

const Index: React.FC<Props> = (props) => {
  const {notification, dispatch} = props;

  function handleChange(attribute: string, e: any) {
    const localNotification = deepCopy(notification);
    if (localNotification) {
      localNotification[attribute] = e;
    }
    if (dispatch) {
      dispatch({
        type: `${namespace}/editComponent`,
        payload: {
          type: PageComponentsType.Notification,
          notification: localNotification
        }
      });
    }
  }

  return (
    <div>
      <div className={commonStyle.settingTitle}>通知</div>
      <InputText
        label="公告标题"
        text={notification.title}
        onChangeInput={(e) => handleChange("title", e)} />
      <InputText
        label="公告内容"
        text={notification.text}
        onChangeInput={(e) => handleChange("text", e)} />
      <Row>
        <Col span={12}>
          <PickColor
            label="字体颜色"
            value={notification.fontColor}
            onChangeInput={(e) => handleChange("fontColor", e)} />
        </Col>
        <Col span={12}>
          <PickColor
            label="背景颜色"
            value={notification.backgroundColor}
            onChangeInput={(e) => handleChange("backgroundColor", e)} />
        </Col>
      </Row>
    </div>
  );
};

export default connect()(Index);
