import React, { useEffect, useState } from "react";
import styles from "./index.less";
import { Modal, Table } from "antd";
import { Good } from "@/pages/good/type/good";
import { fetchGoodList, getGoodListByIds } from "@/pages/good/manage/service";
import CommonImage from "@/pages/page/edit/components/preview/components/commonImage";

interface Props {
  goodList: number[];
  onChangeGood: (e: number[]) => void;
}

const Index: React.FC<Props> = props => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [goodInfoList, setGoodInfoList] = useState<Good[]>([]);
  const [modalGoodList, setModalGoodList] = useState<number[]>([]);
  const [showGoodInfo, setShowGoodInfo] = useState<Good[]>([]);
  const {onChangeGood, goodList} = props;

  useEffect(() => {
    fetchGoodList().then((res) => {
      setGoodInfoList(res.map(item => ({
        ...item,
        key: item.id
      })));
    });
  }, []);

  useEffect(() => {
    if (goodList) {
      setModalGoodList(goodList);
      getGoodListByIds(goodList).then(res => {
        setShowGoodInfo(res);
      });
    }
  }, [goodList]);

  function handleClickAdd() {
    setModalVisible(true);
  }

  function handleChangeModalGoodList(goodList: number[]) {
    setModalGoodList(goodList);
  }

  function handleModalOk() {
    onChangeGood(modalGoodList);
    setModalVisible(false);
  }

  const column = [
    {
      title: "商品名称",
      dataIndex: "title",
      key: "title",
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
    }
  ];

  return (
    <div className={styles.choose}>
      <div className={styles.buttonBlock}>
        <div
          className={styles.block}
          onClick={handleClickAdd}>
          +
        </div>
        {
          showGoodInfo.map(item =>
            <div
              className={styles.block}
              key={item.id}>
              <CommonImage src={item.imgUrl} />
            </div>)
        }
      </div>

      <Modal
        title="选择商品"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={() => {
          setModalVisible(false);
        }}>
        <Table
          rowSelection={{
            type: "checkbox",
            onChange: (selectedRowKeys, selectedRows) => {
              const result = selectedRows.map((item) => item.id);
              handleChangeModalGoodList(result);
            },
            selectedRowKeys: modalGoodList
          }}
          columns={column}
          dataSource={goodInfoList} />
      </Modal>
    </div>
  );
};

export default Index;
