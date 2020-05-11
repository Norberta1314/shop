import React from "react";
import styles from "./index.less";
import { Notification } from "@/pages/page/type/component/Notification";

interface Props {
  notification: Notification ;
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> notification</div>
);

export default Index;
