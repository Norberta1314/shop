import React from "react";
import { connect } from "dva";
import styles from "./index.less";
import { PageEdit } from "@/pages/page/edit/ModelType";
import { Page } from "@/pages/page/type/page";
import PreviewMain from "./Main";

interface Prop {
  page?: Page;
  currentEditComponent?: number;
}

const Index = ({page, currentEditComponent}: Prop) => (
  <div className={styles.main}>
    <PreviewMain list={page?.components || []} currentEditComponent={currentEditComponent}/>
  </div>
);

export default connect(
  ({pageEdit}: { pageEdit: PageEdit }) =>
    ({
      page: pageEdit.page,
      currentEditComponent: pageEdit.currentEditComponent
    })
)(Index);
