import React from "react";
import commonStyle from "../../index.less";
import ImageManage from "../common/ImageManage";
import { Cell } from "@/pages/page/type/component/ShowCase";
import deepCopy from "@/utils/deepCopy";
import InputNumber from "../common/InputNumber";

interface Props {
  label: string;
  cell: Cell;
  onChangeCell: (value: Cell) => void;
}

const Index: React.FC<Props> = (props) => {
  const {label, cell, onChangeCell} = props;

  function handleChangeImage(value: (string | undefined)[] | string | undefined) {
    if (typeof value === "string") {
      handleChange("url", value);
    } else if (value === undefined) {
      handleChange("url", undefined);
    }
  }

  function handleChange(attribute: string, e: any) {
    const localCell = deepCopy(cell);
    localCell[attribute] = e;
    onChangeCell(localCell);
  }

  return (
    <div className={commonStyle.commonEdit}>
      <div className={commonStyle.label}>{label}</div>
      <ImageManage
        imgNumber={1}
        fileList={cell.url}
        onChangeImage={handleChangeImage} />
      <InputNumber
        label="左边距"
        value={cell.marginLeft}
        min={0}
        max={30}
        unit="px"
        onChangeInput={(value) => handleChange("marginLeft", value)}
      />
      <InputNumber
        label="宽度"
        value={cell.width}
        min={0}
        max={750}
        unit="px"
        onChangeInput={(value) => handleChange("width", value)}
      />
    </div>
  );
};

export default Index;
