import React from "react";
import { SketchPicker } from "react-color";
import { Button, Col, Popover, Row } from "antd";
import commonStyle from "../../../index.less";
import styles from "./index.less";
import { ColorProps } from "@/type/react-color";

interface Props {
  label: string;
  value: string;
  onChangeInput?: (value: string) => any;
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => {
  function handleChangeColor(value: ColorProps) {
    if (props.onChangeInput) {
      props.onChangeInput(value.hex);
    }
  }

  const picker = (
    <SketchPicker
      color={props.value}
      onChangeComplete={handleChangeColor} />
  );
  return (
    <div className={commonStyle.commonEdit}>
      <Row align="middle">
        <Col>
          <div className={commonStyle.label}>{props.label}</div>
        </Col>
        <Col span={6} offset={1}>
          <Popover content={picker} trigger="click">
            <Button>
              <div style={{background: props.value}} className={styles.colorDot} />
            </Button>
          </Popover>
        </Col>
      </Row>
    </div>

  );
};

export default Index;
