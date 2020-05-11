import React, { useState, useEffect } from "react";
import { connect } from "dva";
import styles from "./index.less";
import Headline from "./components/Headline";
import { PageEdit } from "@/pages/page/edit/ModelType";
import { PageComponents } from "@/pages/page/type/pageComponents";
import ReactIf from "@/components/ReactIf";
import { newHeadline } from "@/pages/page/type/component/Headline";

interface Props {
  list?: (PageComponents | null)[];
  currentEditCom?: number;
}

const Index = ({list, currentEditCom}: Props) => {
  const [currentEdit, setCurrentEdit] = useState<PageComponents | null>(null);

  function changeCurEdit() {
    if (list) {
      if (currentEditCom !== undefined && currentEditCom !== null) {
        setCurrentEdit(list[currentEditCom]);
      }
    }
  }

  useEffect(() => {
    changeCurEdit();
  }, []);

  useEffect(() => {
    changeCurEdit();
  }, [currentEditCom, list]);

  return (
    <div className={styles.main}>
      <ReactIf vIf={currentEdit?.headline}>
        <Headline headline={currentEdit?.headline || newHeadline}/>
      </ReactIf>
    </div>
  );
};

export default connect(({pageEdit}: { pageEdit: PageEdit }) =>
  ({
    list: pageEdit.page?.components,
    currentEditCom: pageEdit.currentEditComponent
  })
)(Index);
