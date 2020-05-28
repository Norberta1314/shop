import React, { useState, useEffect } from "react";
import { connect } from "dva";
import styles from "./index.less";
import Headline from "./components/Headline";
import Image from "./components/Image";
import Carousel from "./components/Carousel";
import ShowCase from "./components/ShowCase";
import Notification from "./components/Notification";
import Nav from "./components/Nav";
import ShopHeader from "./components/ShopHeader";
import Goods from "./components/Goods";
import Divider from "./components/Divider";
import Coupon from "./components/Coupon";
import { PageEdit } from "@/pages/page/edit/ModelType";
import { PageComponents } from "@/pages/page/type/pageComponents";
import ReactIf from "@/components/ReactIf";
import { newHeadline } from "@/pages/page/type/component/Headline";
import { newImage } from "@/pages/page/type/component/Image";
import { newCarousel } from "@/pages/page/type/component/Carousel";
import { newShowCase } from "@/pages/page/type/component/ShowCase";
import { newNotification } from "@/pages/page/type/component/Notification";
import { newNav } from "@/pages/page/type/component/Nav";
import { newShopHeader } from "@/pages/page/type/component/ShopHeader";
import { newGoods } from "@/pages/page/type/component/Goods";
import { Dispatch } from "redux";
import { newDivider } from "@/pages/page/type/component/Divider";
import { newCoupon } from "@/pages/page/type/component/Coupon";

interface Props {
  list?: (PageComponents | null)[];
  currentEditCom?: number;
  dispatch: Dispatch<any>;
}

const Index = ({list, currentEditCom, dispatch}: Props) => {
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
      <ReactIf vIf={currentEdit?.shopHeader}>
        <ShopHeader shopHeader={currentEdit?.shopHeader || newShopHeader} />
      </ReactIf>
      <ReactIf vIf={currentEdit?.goods}>
        <Goods goods={currentEdit?.goods || newGoods} />
      </ReactIf>
      <ReactIf vIf={currentEdit?.divider}>
        <Divider
          dispatch={dispatch}
          divider={currentEdit?.divider || newDivider} />
      </ReactIf>
      <ReactIf vIf={currentEdit?.coupon}>
        <Coupon
          dispatch={dispatch}
          coupon={currentEdit?.coupon || newCoupon} />
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
