import React from "react";
import styles from '../index.less';
import buttonStyle from '../../../../button.less'
import { Button, Card } from "antd";
import { EditOutlined, DeleteOutlined, EllipsisOutlined } from "@ant-design/icons/lib";
import { Page } from "@/pages/page/type/page";
import { Dispatch } from "redux";
import { connect } from 'dva'

interface CardProp {
  page: Page;
  dispatch: Dispatch<any>;
}

const PageCard = ({page, dispatch}: CardProp) => {
  const handleClickEdit = () => {
    if (dispatch) {
      dispatch({
        type: 'pageManage/goToEdit',
        payload: {id: page.id}
      })
    }
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

export default connect()(PageCard)
