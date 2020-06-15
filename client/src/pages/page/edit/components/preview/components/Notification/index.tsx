import React from "react";
import styles from "./index.less";
import { Notification } from "@/pages/page/type/component/Notification";

interface Props {
  notification: Notification;
}


const Index: React.FC<Props> = props => (
  <div
    className={styles.main}
    style={{background: props.notification.backgroundColor}}>
    <div
      className={styles.container}
      style={{
        color: props.notification.fontColor,
        borderColor: props.notification.fontColor
      }}>
      <div className={styles.title}>{props.notification.title}</div>
      <div className={styles.text}>{props.notification.text}</div>
    </div>
  </div>
);

export default Index;
