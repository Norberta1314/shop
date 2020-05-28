import React from "react";
import styles from "./index.less";
import { ShopHeader } from "@/pages/page/type/component/ShopHeader";
import CommonImage from "@/pages/page/edit/components/preview/components/commonImage";
import { Avatar } from "antd";

interface Props {
  shopHeader: ShopHeader
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}>
    <div className={styles.backgroundImg}>
      <CommonImage
        src={props.shopHeader?.backgroundImgUrl}
        background='#eee' />
    </div>
    <div className={styles.otherGroup}>
      <Avatar
        size={64}
        icon={<CommonImage src={props.shopHeader.avatorImgUrl}/>} />
      <div className={styles.title}>{props.shopHeader?.name}</div>
    </div>
  </div>
);

export default Index;
