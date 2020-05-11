import React from "react";
import { connect } from "dva";
import { Dispatch } from "redux";
import InputText from "../common/InputText";
import InputNumber from "../common/InputNumber";
import PickColor from "../common/PickColor";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import { Headline } from "@/pages/page/type/component/Headline";
import deepCopy from "@/utils/deepCopy";
import { namespace } from "@/pages/page/edit/ModelType";
import { Col, Row } from "antd";

interface Props {
  headline: Headline;
  dispatch?: Dispatch<any>;
}

const Index = ({headline, dispatch}: Props) => {

  function handleChange(attribute: string, e: any) {
    const headlineLocal = deepCopy(headline);
    if (headlineLocal) {
      headlineLocal[attribute] = e;
    }
    if (dispatch) {
      dispatch({
        type: `${namespace}/editComponent`,
        payload: {
          type: PageComponentsType.Headline,
          headline: headlineLocal
        }
      });
    }
  }

  return (
    <div>
      <InputText
        title="标题"
        text={headline.title}
        onChangeInput={(e) => handleChange("title", e)} />
      <InputNumber
        title="字体"
        min={12}
        max={20}
        value={headline.fontSize}
        unit="px"
        onChangeInput={(e) => handleChange("fontSize", e)} />
      <Row>
        <Col span={12}>
          <PickColor
            title="字体颜色"
            value={headline.fontColor}
            onChangeInput={(e) => handleChange("fontColor", e)} />
        </Col>
        <Col span={12}>
          <PickColor
            title="背景颜色"
            value={headline.backgroundColor}
            onChangeInput={(e) => handleChange("backgroundColor", e)} />
        </Col>
      </Row>

    </div>
  );
};

export default connect()(Index);
