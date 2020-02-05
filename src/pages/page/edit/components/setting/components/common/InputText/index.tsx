import React from "react";
import { Input } from "antd";
import commonStyle from "../../../index.less";

interface Prop {
  title: string;
  text: string | null | undefined;
  onChangeInput?: (value: string) => any;
}

const Index = ({title, text, onChangeInput}: Prop) => {
  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChangeInput) {
      onChangeInput(e.target.value);
    }
  }

  return (
    <div>
      <div className={commonStyle.title}>{title}</div>
      <div className={commonStyle.inputWarp}>
        <Input
          value={text || ""}
          onChange={handleChangeInput}
        />
      </div>

    </div>
  );
};

export default Index;
