import React, { useEffect } from "react";
import { newCell, ShowCase, ShowCaseMode } from "@/pages/page/type/component/ShowCase";
import ChooseTable from "./ChooseTable";
import Cell from "./Cell";
import { Cell as CellType } from "@/pages/page/type/component/ShowCase";
import { connect } from "dva";
import { RadioChangeEvent } from "antd/lib/radio";
import { Dispatch } from "redux";
import deepCopy from "@/utils/deepCopy";
import { namespace } from "@/pages/page/edit/ModelType";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import commonStyles from "../../index.less";

interface Props {
  showCase: ShowCase;
  dispatch: Dispatch<any>;
}

const Index: React.FC<Props> = (props) => {
  const {showCase, dispatch} = props;
  useEffect((() => {
    if (showCase.mode === ShowCaseMode.mode1) {
      handleChange("cells", [
        newCell,
        newCell
      ]);
    } else if (showCase.mode == ShowCaseMode.mode2) {
      handleChange("cells", [newCell, newCell, newCell]);
    }
  }), [showCase.mode]);

  function handleChange(attribute: string, e: any) {
    const localShowcase = deepCopy(showCase);
    if (localShowcase) {
      localShowcase[attribute] = e;
    }
    if (dispatch) {
      dispatch({
        type: `${namespace}/editComponent`,
        payload: {
          type: PageComponentsType.ShowCase,
          showCase: localShowcase
        }
      });
    }
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
      <ChooseTable
        mode={showCase.mode}
        onChangeMode={handleChangeMode} />
      <div className={commonStyles.info}>页面的宽度是375px哦,宽度和超过375px会换行</div>
      {
        showCase.cells.map((cell, index) => (
          <Cell
            label={`区域${index + 1}`}
            cell={cell}
            onChangeCell={(e) => handleChangeCell(e, index)} />
        ))
      }
    </div>
  );
};

export default connect()(Index);
