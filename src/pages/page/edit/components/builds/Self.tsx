import React from "react";
import { Button } from "antd";
import { buildList } from "@/pages/page/type/buildList";
import styles from "./index.less";

const Self = () => {
  function handleClickComponents(type: number) {
    console.log(type);
    return false;
  }

  return (
    <div className={styles.self}>
      <div className={styles.title}>基础组件</div>
      <ul>
        {
          buildList.baseList.map((item) => (
            <li key={item.type}><Button onClick={() => handleClickComponents(item.type)} icon={item.icon}>{item.title}</Button></li>
          ))
        }
      </ul>
      <div className={styles.title}>营销组件</div>
      <ul>
        {
          buildList.marketList.map((item) => (
            <li key={item.type}><Button onClick={() => handleClickComponents(item.type)} icon={item.icon}>{item.title}</Button></li>
          ))
        }
      </ul>
    </div>
  );
};

export default Self;
