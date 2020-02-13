import React from "react";
import styles from "./index.less";
import { Nav } from "@/pages/page/type/component/Nav";

interface Props {
  nav: Nav
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> nav</div>
);

export default Index;
