import React from "react";
import { NavCell } from "@/pages/page/type/component/Nav";
import commonStyle from "../../index.less";
import ImageManage from "../common/ImageManage";
import deepCopy from "@/utils/deepCopy";
import InputText from "../common/InputText";
import PickColor from "../common/PickColor";
import { Divider } from "antd";

interface Props {
  label: string;
  cell: NavCell;
  onChangeCell: (value: NavCell) => void;
}

const Index: React.FC<Props> = props => {
  const {label, cell, onChangeCell} = props;

  function handleChange(attribute: string, e: any) {
    const localCell = deepCopy(cell);
    localCell[attribute] = e;
    console.log("localcell", localCell);
    onChangeCell(localCell);
  }

  function handleChangeImage(value: (string | undefined)[] | string | undefined) {
    console.log("handlechangeimage", value, typeof value);
    if (typeof value === "string") {
      handleChange("imgUrl", value);
    } else if (value === undefined) {
      handleChange("imgUrl", undefined);
    }
  }

  return (
    <div className={commonStyle.commonEdit}>
      <div className={commonStyle.label}>{label}</div>
      {/*<ImageManage*/}
      {/*  imgNumber={1}*/}
      {/*  fileList={cell.imgUrl}*/}
      {/*  onChangeImage={handleChangeImage} />*/}
      <InputText
        label="导航内容"
        text={cell.text}
        onChangeInput={(e) => handleChange("text", e)} />
      <PickColor
        label="导航颜色"
        value={cell.color}
        onChangeInput={e => handleChange("color", e)} />
      <Divider />
    </div>
  );
};

export default Index;
