import React from "react";
import commonStyles from "../../../index.less";
import { Radio } from "antd";
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
      <div className={commonStyles.label}>{label}</div>
      <Radio.Group
        value={value}
        onChange={onChangeRadio}>
        {options.map((item, index) => (
          <Radio.Button
            key={item.label || index}
            value={item.value}>{item.label}</Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default Index;
