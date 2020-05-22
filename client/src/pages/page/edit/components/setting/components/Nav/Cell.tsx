import React from "react";
import { NavCell } from "@/pages/page/type/component/Nav";
import commonStyle from "../../index.less";
import ImageManage from "../common/ImageManage";
import deepCopy from "@/utils/deepCopy";

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
    console.log('localcell', localCell)
    onChangeCell(localCell);
  }

  function handleChangeImage(value: (string | undefined)[] | string | undefined) {
    console.log('handlechangeimage', value, typeof value)
    if (typeof value === "string") {
      handleChange("imgUrl", value);
    } else if (value === undefined) {
      handleChange("imgUrl", undefined);
    }
  }


  return (
    <div className={commonStyle.commonEdit}>
      <div className={commonStyle.label}>{label}</div>
      <ImageManage
        imgNumber={1}
        fileList={cell.imgUrl}
        onChangeImage={handleChangeImage} />
    </div>
  );
};

export default Index;