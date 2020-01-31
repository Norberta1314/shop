import React from 'react';
import styles from '../index.less';
import PageCard from "@/pages/page-manage/index/components/Card";
import { Page } from "@/pages/page-manage/type/page";

const Group = ({title, list}: { title: String; list?: Page[] }) => (
  <div className={styles.group}>
    <div>{title}</div>
    <div className={styles.container}>
      {
        list?.map((item) => (<PageCard key={item.id} page={item}/>))
      }
    </div>
  </div>
);

export default Group;
