import React from "react";
import { Button } from "antd";
import { connect } from "dva";
import { Dispatch } from "redux";
import { buildList } from "@/pages/page/type/buildList";
import styles from "./index.less";

interface SelfProps {
  dispatch?: Dispatch<any>;
}

const Self = ({dispatch}: SelfProps) => {
  function handleClickComponents(type: number) {
    if (dispatch) {
      dispatch({
        type: "pageEdit/addComponent",
        payload: {
          type
        }
      });
    }
    return false;
  }

  return (
    <div className={styles.self}>
      <div className={styles.title}>基础组件</div>
      <ul>
        {
          buildList.baseList.map((item) => (
            <li key={item.type} draggable="true"><Button onClick={() => handleClickComponents(item.type)} icon={item.icon}>{item.title}</Button></li>
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

export default connect()(Self);
