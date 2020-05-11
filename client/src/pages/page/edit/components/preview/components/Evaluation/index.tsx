import React from "react";
import styles from "./index.less";
import { Evaluation } from "@/pages/page/type/component/Evaluation";

interface Props {
  evaluation?: Evaluation
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> evaluation</div>
);

export default Index;
