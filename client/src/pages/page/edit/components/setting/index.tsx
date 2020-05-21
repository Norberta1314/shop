import React, { useState, useEffect } from "react";
import { connect } from "dva";
import styles from "./index.less";
import Headline from "./components/Headline";
import Image from "./components/Image";
import Carousel from "./components/Carousel";
import ShowCase from "./components/ShowCase";
import Notification from "./components/Notification";
import Nav from "./components/Nav";
import { PageEdit } from "@/pages/page/edit/ModelType";
import { PageComponents } from "@/pages/page/type/pageComponents";
import ReactIf from "@/components/ReactIf";
import { newHeadline } from "@/pages/page/type/component/Headline";
import { newImage } from "@/pages/page/type/component/Image";
import { newCarousel } from "@/pages/page/type/component/Carousel";
import { newShowCase } from "@/pages/page/type/component/ShowCase";
import { newNotification } from "@/pages/page/type/component/Notification";
import { newNav } from "@/pages/page/type/component/Nav";

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
        <Headline headline={currentEdit?.headline || newHeadline} />
      </ReactIf>
      <ReactIf vIf={currentEdit?.image}>
        <Image image={currentEdit?.image || newImage} />
      </ReactIf>
      <ReactIf vIf={currentEdit?.carousel}>
        <Carousel carousel={currentEdit?.carousel || newCarousel} />
      </ReactIf>
      <ReactIf vIf={currentEdit?.showCase}>
        <ShowCase showCase={currentEdit?.showCase || newShowCase} />
      </ReactIf>
      <ReactIf vIf={currentEdit?.notification}>
        <Notification notification={currentEdit?.notification || newNotification} />
      </ReactIf>
      <ReactIf vIf={currentEdit?.nav}>
        <Nav nav={currentEdit?.nav || newNav} />
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
