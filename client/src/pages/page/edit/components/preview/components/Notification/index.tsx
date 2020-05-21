import React from "react";
import styles from "./index.less";
import { Notification } from "@/pages/page/type/component/Notification";
import { NotificationOutlined } from "@ant-design/icons/lib";
import ReactIf from "@/components/ReactIf";
import { imgUrlBase } from "../../../../../../../../config/config";

interface Props {
  notification: Notification;
}


const Index: React.FC<Props> = props => (
  <div className={styles.main}>
    <ReactIf vIf={props.notification.icon}>
      <img
        className={styles.icon}
        src={`${imgUrlBase}/${props.notification.icon}`} />
    </ReactIf>
    <ReactIf vIf={!props.notification.icon}>
      <NotificationOutlined className={styles.icon} />
    </ReactIf>

    <span className={styles.text}>{props.notification.text}</span>
  </div>
);

export default Index;
