import React from "react";
import styles from '../index.less';
import { Button, Card } from "antd";
import { EditOutlined, DeleteOutlined, EllipsisOutlined } from "@ant-design/icons/lib";
import { Page } from "@/pages/page-manage/type/page";


const PageCard = ({page}: { page: Page }) => {
  const handleClickEdit = () => {
    console.log('click edit')
  };

  const handleClickDelete = () => {
    console.log('click delete')
  };

  const handleClickEllipsis = () => {
    console.log('click ellipsis')
  };
  return (
    <div className={styles.card}>
      <Card
        actions={[
          <Button type="link" icon={<EditOutlined/>} onClick={handleClickEdit}/>,
          <Button type="link" icon={<DeleteOutlined/>} onClick={handleClickDelete}/>,
          <Button type="link" icon={<EllipsisOutlined/>} onClick={handleClickEllipsis}/>,
        ]}
        style={{width: 200}}
        cover={<img alt="example" src={page.previewImg}/>}>
        <div className={styles.title}>{page.title}</div>
      </Card>
    </div>
  )
}

export default PageCard
