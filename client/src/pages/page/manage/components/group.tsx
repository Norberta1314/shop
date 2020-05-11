import React from 'react';
import styles from '../index.less';
import PageCard from "@/pages/page/manage/components/Card";
import { Page } from "@/pages/page/type/page";
import { Card } from "antd";
import ReactIf from "@/components/ReactIf";

const Group = ({title, list, hasAdd}: { title: String; list?: Page[]; hasAdd: Boolean }) => (
  <div className={styles.group}>
    <div>{title}</div>
    <div className={styles.container}>
      <ReactIf vIf={hasAdd}>
        <div className={styles.addCard}>
          <Card style={{width: 200}}>+</Card>
        </div>
      </ReactIf>

      {
        list?.map((item) => (<PageCard key={item.id} page={item}/>))
      }
    </div>
  </div>
);

export default Group;
