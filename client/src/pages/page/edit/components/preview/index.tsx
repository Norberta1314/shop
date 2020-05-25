import React from "react";
import { connect } from "dva";
import styles from "./index.less";
import { PageEdit } from "@/pages/page/edit/ModelType";
import { Page } from "@/pages/page/type/page";
import PreviewMain from "./Main";
import Delete from "./Delete";

interface Prop {
  page?: Page;
  currentEditComponent?: number;
  dragStart?: number | null;
}

const Index = ({page, currentEditComponent, dragStart = null}: Prop) => (
  <div className={styles.main}>
    <PreviewMain
      list={page?.components || []}
      currentEditComponent={currentEditComponent} />
    <Delete dragStart={dragStart}/>
  </div>
);

export default connect(
  ({pageEdit}: { pageEdit: PageEdit }) =>
    ({
      page: pageEdit.page,
      currentEditComponent: pageEdit.currentEditComponent,
      dragStart: pageEdit.dragStart
    })
)(Index);
