import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import ReactIf from "@/components/ReactIf";
import Group from '@/pages/page/manage/components/group';
import styles from './index.less';
import { fetchPageList } from "@/pages/page/manage/service";
import { connect } from 'dva'
import { Result } from "@/type/Result";

const PageManage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [baseList, setBaseList] = useState([]);
  const [selfList, setSelfList] = useState([])
  useEffect(() => {
    fetchPageList().then((r: Result<any>) => {
      if (r?.success) {
        setBaseList(r?.result?.baseList)
        setSelfList(r?.result?.selfList)
      }
      setLoading(false)
    })
  }, []);

  return (
    <div className={styles.main}>
      <ReactIf vIf={!loading}>
        <Group title="基础页面" list={baseList} hasAdd={false}/>
        <Group title="自定义页面" list={selfList} hasAdd/>
      </ReactIf>
      <ReactIf vIf={loading}>
        <Spin/>
      </ReactIf>
    </div>
  );
}

export default connect()(PageManage)
