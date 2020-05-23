import React from "react";
import { Button, Card } from "antd";
import { EditOutlined, DeleteOutlined, EllipsisOutlined, InstagramOutlined } from "@ant-design/icons/lib";
import { Dispatch } from "redux";
import { connect } from "dva";
import { Page } from "@/pages/page/type/page";
import styles from "../index.less";
import ReactIf from "@/components/ReactIf";

interface CardProp {
  page: Page;
  dispatch: Dispatch<any>;
}

const PageCard = ({page, dispatch}: CardProp) => {
  const handleClickEdit = () => {
    if (dispatch) {
      dispatch({
        type: "pageManage/goToEdit",
        payload: {id: page.id}
      });
    }
  };

  const handleClickDelete = () => {
    console.log("click delete");
  };

  const handleClickEllipsis = () => {
    console.log("click ellipsis");
  };

  const preview = (img: string) => (
    <ReactIf vIf={true}>
      <ReactIf vIf={img}>
        <img
          alt="example"
          src={page.previewImg} />
      </ReactIf>
      <ReactIf vIf={!img}>
        <span className={styles.cover_img}>
           <InstagramOutlined />
        </span>
      </ReactIf>
    </ReactIf>
  );
  return (
    <div className={styles.card}>
      <Card
        actions={[
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={handleClickEdit} />,
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={handleClickDelete} />,
          <Button
            type="link"
            icon={<EllipsisOutlined />}
            onClick={handleClickEllipsis} />,
        ]}
        style={{width: 200}}
        cover={preview(page.previewImg)}>
        <div className={styles.title}>{page.title}</div>
      </Card>
    </div>
  );
};

export default connect()(PageCard);
