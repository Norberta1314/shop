import React from "react";
import styles from "./index.less";
import { ShopHeader } from "@/pages/page/type/component/ShopHeader";

interface Props {
  shopHEader?: ShopHeader
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> shopHeader</div>
);

export default Index;
