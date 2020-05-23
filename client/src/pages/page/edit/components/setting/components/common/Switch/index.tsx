import React from "react";
import { Row, Switch, Col } from "antd";
import commonStyle from "../../../index.less";

interface Props {
  label: string;
  defaultChecked: boolean;
  onChangeSwitch?: (value: boolean) => any;
}

const Index: React.FC<Props> = props => {
  const {label, defaultChecked, onChangeSwitch} = props;

  function handleChangeSwitch(e: boolean) {
    if (onChangeSwitch) {
      onChangeSwitch(e);
    }
  }

  return (
    <div className={commonStyle.commonEdit}>
      <Row align="middle">
        <Col>
          <div className={commonStyle.label}>{label}</div>
        </Col>
        <Col offset={1}>
          <Switch
            defaultChecked={defaultChecked}
            onChange={handleChangeSwitch} />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
