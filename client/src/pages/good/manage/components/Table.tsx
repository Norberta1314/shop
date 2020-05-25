import React from "react";
import { Avatar, Table } from "antd";
import styles from "../index.less";
import { Good } from "@/pages/good/type/good";
import { Comment } from "antd";
import { imgUrlBase } from "../../../../../config/config";
import { Dispatch } from "redux";
import { connect } from "dva";
import { namespace } from "@/pages/good/manage/modeType";

interface Prop {
  dispatch: Dispatch<any>;
  goodList: Good[];
}


const Index: React.FC<Prop> = (props) => {
  const {goodList, dispatch} = props;
  const column = [
    {
      title: "商品名称",
      dataIndex: "title",
      key: "title",
      width: 300,
      render: (text: string, record: Good) => (
        <Comment
          author={<a>{text}</a>}
          content={<p>{record.info}</p>}
          avatar={
            <Avatar
              src={`${imgUrlBase}/${record.imgUrl}`}
              alt={text}
            />
          } />)
    }, {
      title: "品牌",
      dataIndex: "brand",
      key: "brand"
    }, {
      title: "价格",
      dataIndex: "price",
      key: "price",
    }, {
      title: "库存",
      dataIndex: "stock",
      key: "stock",
    }, {
      title: "购买量",
      dataIndex: "buyAmount",
      key: "buyAmount",
    }, {
      title: "浏览量",
      dataIndex: "pageView",
      key: "pageView"
    }, {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
    }, {
      title: "Action",
      key: "操作",
      render: (text: string, record: Good) => (
        <div>
          <a onClick={() => handleClickEdit(record)}>编辑</a>
        </div>
      ),
    },
  ];

  function handleClickEdit(record: Good) {
    if (dispatch) {
      dispatch({
        type: `${namespace}/save`,
        payload: {
          showAddGoodModel: true,
          editGood: record
        }
      });
    }
  }

  return (
    <div className={styles.table}>
      <Table
        columns={column}
        dataSource={goodList} />
    </div>
  );
};

export default connect()(Index);
