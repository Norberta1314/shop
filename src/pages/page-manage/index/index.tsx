import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import Group from '@/pages/page-manage/index/components/group';
import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.main}>
      <Group title="基础" />
    </div>
  );
};
