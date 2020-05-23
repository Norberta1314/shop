import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import ReactIf from "@/components/ReactIf";
import Group from "@/pages/page/manage/components/group";
import styles from "./index.less";
import { fetchPageList } from "@/pages/page/manage/service";
import { connect } from "dva";
import { Result } from "@/type/Result";
import { success } from "@/utils/request";
import { Page, PageMode } from "@/pages/page/type/page";

const PageManage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [baseList, setBaseList] = useState<Page[]>([]);
  const [selfList, setSelfList] = useState<Page[]>([]);
  useEffect(() => {
    fetchPageList(1).then((r: Result<Page[]>) => {
      if (r.code === success) {
        const baseList: Page[] = [];
        const selfList: Page[] = [];
        r.data.map((page) => {
          if (page.mode === PageMode.default) {
            baseList.push(page);
          } else {
            selfList.push(page);
          }
        });
        setBaseList(baseList);
        setSelfList(selfList);
      }
      setLoading(false);
    });


  }, []);

  return (
    <div className={styles.main}>
      <ReactIf vIf={!loading}>
        <Group
          title="基础页面"
          list={baseList}
          hasAdd={false} />
        <Group
          title="自定义页面"
          list={selfList}
          hasAdd />
      </ReactIf>
      <ReactIf vIf={loading}>
        <Spin />
      </ReactIf>
    </div>
  );
};

export default connect()(PageManage);
