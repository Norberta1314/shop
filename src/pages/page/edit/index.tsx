import React from "react";
import styles from "./index.less";
import Header from "@/pages/page/edit/components/Header";
import Builds from "@/pages/page/edit/components/builds";
import Preview from "@/pages/page/edit/components/preview";
import Setting from "@/pages/page/edit/components/setting";

export default () => (
  <div className={styles.main}>
    <Header/>
    <div className={styles.container}>
      <Builds></Builds>
      <Preview></Preview>
      <Setting></Setting>
    </div>

  </div>
);
