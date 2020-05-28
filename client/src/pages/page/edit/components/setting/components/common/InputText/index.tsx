import React from "react";
import { Col, Input, Row } from "antd";
import commonStyle from "../../../index.less";

interface Prop {
  label: string;
  text: string | null | undefined;
  onChangeInput: (value: string) => any;
}

const Index = ({label, text, onChangeInput}: Prop) => {
  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChangeInput) {
      onChangeInput(e.target.value);
    }
  }

  return (
    <div className={commonStyle.commonEdit}>
      <Row align="middle">
        <Col>
          <div className={commonStyle.label}>{label}:</div>
        </Col>
        <Col span={12} offset={1}>
          <Input
            value={text || ""}
            onChange={handleChangeInput}
          />
        </Col>
      </Row>

    </div>
  );
};

export default Index;
