import React from "react";
import styles from './index.less'
import { Goods } from "@/pages/page/type/component/Goods";

interface Props {
  goods?: Goods
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> goods</div>
);

export default Index;
