import React, { useEffect } from "react";
import { newCell, ShowCase, ShowCaseMode } from "@/pages/page/type/component/ShowCase";
import ChooseTable from "./ChooseTable";
import Cell from "./Cell";
import { ShowCaseCell as CellType } from "@/pages/page/type/component/ShowCase";
import { connect } from "dva";
import { RadioChangeEvent } from "antd/lib/radio";
import { Dispatch } from "redux";
import { changeEditCompoennt } from "@/pages/page/edit/ModelType";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import commonStyles from "../../index.less";
import PickColor from "../common/PickColor";
import commonStyle from "@/pages/page/edit/components/setting/index.less";

interface Props {
  showCase: ShowCase;
  dispatch: Dispatch<any>;
}

const Index: React.FC<Props> = (props) => {
  const {showCase, dispatch} = props;
  useEffect((() => {
    if (showCase.mode === ShowCaseMode.mode1) {
      if (showCase.cells.length !== 2) {
        handleChange("cells", [newCell, newCell]);
      }
    } else if (showCase.mode == ShowCaseMode.mode2) {
      if (showCase.cells.length === 2) {
        handleChange("cells", [...showCase.cells, newCell]);
      }

    }
  }), [showCase.mode]);

  function handleChange(attribute: string, e: any) {
    changeEditCompoennt(dispatch, showCase, attribute, e, PageComponentsType.ShowCase);
  }

  function handleChangeMode(e: RadioChangeEvent) {
    handleChange("mode", e.target.value);

  }

  function handleChangeCell(value: CellType, order: number) {
    const cells = showCase.cells;
    cells[order] = value;
    handleChange("cells", cells);
  }

  return (
    <div>
      <div className={commonStyle.settingTitle}>橱窗</div>
      <ChooseTable
        mode={showCase.mode}
        onChangeMode={handleChangeMode} />
      <PickColor
        label="背景颜色"
        value={showCase.backgroundColor}
        onChangeInput={(e) => handleChange("backgroundColor", e)} />
      <div className={commonStyles.info}>(页面的宽度是375px哦,宽度和超过375px会换行)</div>
      {
        showCase.cells.map((cell, index) => (
          <Cell
            key={`${cell.imgUrl}-${index}`}
            label={`区域${index + 1}`}
            cell={cell}
            onChangeCell={(e) => handleChangeCell(e, index)} />
        ))
      }
    </div>
  );
};

export default connect()(Index);
