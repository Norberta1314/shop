import React from "react";
import styles from "./index.less";
import { ShowCase } from "@/pages/page/type/component/ShowCase";

interface Props {
  showCase: ShowCase
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> showcase</div>
);

export default Index;
