import React, { useEffect } from "react";
import { Nav, NavCell, navNumberOptions, navStyleOptions, newNavCell } from "@/pages/page/type/component/Nav";
import { changeEditCompoennt } from "@/pages/page/edit/ModelType";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import { Dispatch } from "redux";
import IndexRadio from "../common/InputRadio";
import { connect } from "dva";
import Cell from "./Cell";
import deepCopy from "@/utils/deepCopy";
import commonStyle from "@/pages/page/edit/components/setting/index.less";
import { Divider } from "antd";

interface Props {
  nav: Nav,
  dispatch?: Dispatch<any>
}

const Index: React.FC<Props> = (props) => {
  const {nav, dispatch} = props;

  useEffect(() => {
    let cells = [newNavCell, newNavCell, newNavCell];
    switch (nav.navNumber) {
      case 3:
        if (nav.cells.length !== 3) {
          handleChange("cells", cells);
        }
        break;
      case 4:
        console.log(nav.cells.length)
        if (nav.cells.length !== 4) {
          cells.push(newNavCell);
          handleChange("cells", cells);
        }
        break;
      case 5:
        if (nav.cells.length !== 5) {
          cells.push(newNavCell, newNavCell);
          handleChange("cells", cells);
        }
        break;
    }
  }, [nav.navNumber]);

  function handleChange(attribute: string, e: any) {
    if (dispatch) {
      changeEditCompoennt(dispatch, nav, attribute, e, PageComponentsType.Nav);
    }
  }

  function handleChangeCell(cell: NavCell, index: number) {
    console.log(cell);
    const localcells = deepCopy(nav.cells);
    localcells[index] = cell;
    console.log(localcells);
    handleChange("cells", localcells);
  }

  return (
    <div>
      <div className={commonStyle.settingTitle}>导航</div>
      <IndexRadio
        label="导航数量"
        options={navNumberOptions}
        value={nav.navNumber}
        onChangeRadio={(e) => handleChange("navNumber", e.target.value)} />
      <IndexRadio
        label="导航样式"
        options={navStyleOptions}
        value={nav.styleMode}
        onChangeRadio={(e) => handleChange("styleMode", e.target.value)} />
      <div className={commonStyle.info}> *文字导航的内容以4字最佳</div>
      <Divider />
      {
        nav.cells.map((cell, index) => (
          <Cell
            key={`${cell.imgUrl}-${index}`}
            label={`第${index + 1}个导航`}
            cell={cell}
            onChangeCell={(e) => handleChangeCell(e, index)} />
        ))
      }

    </div>
  );

};

export default connect()(Index);
