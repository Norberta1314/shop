import React from "react";
import { Col, InputNumber, Row, Slider } from "antd";
import commonStyle from "../../../index.less";
import ReactIf from "@/components/ReactIf";


interface Props {
  title: string;
  min: number;
  max: number;
  value: number;
  unit?: string;
  onChangeInput?: (value: number) => any;
}

interface Type extends React.FC<Props> {
}

const Index: Type = props => {
  function handleChangeInput(e: number | undefined | [number, number]) {
    if (props.onChangeInput) {
      if (typeof e === "number") {
        props.onChangeInput(e);
      }
    }
  }

  return (
    <div className={commonStyle.commonEdit}>
      <Row align="middle">
        <Col>
          <div className={commonStyle.title}>{props.title}</div>
        </Col>
        <Col span={12} offset={1}>
          <Slider
            min={props.min}
            max={props.max}
            value={props.value}
            onChange={handleChangeInput} />
        </Col>
        <Col offset={1}>
          <InputNumber
            min={props.min}
            max={props.max}
            value={props.value}
            onChange={handleChangeInput} />
        </Col>
        <Col offset={1}>
          <ReactIf vIf={props?.unit}>
            <span>{props?.unit}</span>
          </ReactIf>
        </Col>
      </Row>

    </div>
  );
};

export default Index;
