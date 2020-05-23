import React from "react";
import commonStyles from "../../../index.less";
import { Col, Radio, Row } from "antd";
import { CheckboxOptionType } from "antd/lib/checkbox";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { RadioChangeEvent } from "antd/lib/radio";

interface Props {
  label: string;
  options: CheckboxOptionType[];
  value: CheckboxValueType;
  onChangeRadio: (e: RadioChangeEvent) => void;
}

const Index: React.FC<Props> = (props) => {
  const {label, options, value, onChangeRadio} = props;

  return (
    <div className={commonStyles.commonEdit}>
      <Row align="middle">
        <Col>
          <div className={commonStyles.label}>{label}</div>
        </Col>
        <Col offset={1}>
          <Radio.Group
            value={value}
            onChange={onChangeRadio}>
            {options.map((item, index) => (
              <Radio.Button
                key={`${item.value}-${index}`}
                value={item.value}>{item.label}</Radio.Button>
            ))}
          </Radio.Group>
        </Col>
      </Row>

    </div>
  );
};

export default Index;
