import React from "react";
import styles from './index.less'
import {Affix} from "@/pages/page/type/component/Affix";

interface Props {
  affix: Affix
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> affix</div>
);

export default Index;
