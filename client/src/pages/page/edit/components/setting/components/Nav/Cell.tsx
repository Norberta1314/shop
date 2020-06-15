import React, { useEffect, useState } from "react";
import { NavCell } from "@/pages/page/type/component/Nav";
import commonStyle from "../../index.less";
import ImageManage from "../common/ImageManage";
import deepCopy from "@/utils/deepCopy";
import InputText from "../common/InputText";
import PickColor from "../common/PickColor";
import { Button, Col, Divider, Modal, Row, Table } from "antd";
import { Page } from "@/pages/page/type/page";

interface Props {
  label: string;
  cell: NavCell;
  pageList: Page[];
  onChangeCell: (value: NavCell) => void;
}

const columns = [
  {
    title: "页面id",
    dataIndex: "id",
    key: "id",
  }, {
    title: "页面名称",
    dataIndex: "title",
    key: "title"
  }
];

const Index: React.FC<Props> = props => {
  const {label, cell, onChangeCell, pageList} = props;
  const [linkName, setLinkName] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalPage, setModalPage] = useState<number>(0);

  function handleChange(attribute: string, e: any) {
    const localCell = deepCopy(cell);
    localCell[attribute] = e;
    console.log("localcell", localCell);
    onChangeCell(localCell);
  }

  function handleChangeImage(value: (string | undefined)[] | string | undefined) {
    console.log("handlechangeimage", value, typeof value);
    if (typeof value === "string") {
      handleChange("imgUrl", value);
    } else if (value === undefined) {
      handleChange("imgUrl", undefined);
    }
  }


  function handleModalOk() {
    handleChange("linkId", modalPage);
    setModalVisible(false);
  }

  function handleChangeModalPage(id: number) {
    setModalPage(id);
  }

  useEffect(() => {
    if (cell.linkId) {
      const name = pageList.find((item) => item.id === cell.linkId)?.title;
      setLinkName(name || "请选择页面");
    } else {
      setLinkName("请选择页面");
    }
  }, [cell.linkId]);
  return (
    <div className={commonStyle.commonEdit}>
      <div className={commonStyle.label}>{label}</div>
      {/*<ImageManage*/}
      {/*  imgNumber={1}*/}
      {/*  fileList={cell.imgUrl}*/}
      {/*  onChangeImage={handleChangeImage} />*/}
      <InputText
        label="导航内容"
        text={cell.text}
        onChangeInput={(e) => handleChange("text", e)} />
      <PickColor
        label="导航颜色"
        value={cell.color}
        onChangeInput={e => handleChange("color", e)} />
      <Row align="middle">
        <Col>
          <div className={commonStyle.label}>导航链接：</div>
        </Col>
        <Col>
          <Button onClick={() => setModalVisible(true)}>{linkName}</Button>
        </Col>
      </Row>

      <Modal
        title="请选择页面"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={() => {
          setModalVisible(false);
        }}>
        <Table
          rowSelection={{
            type: "radio",
            onChange: (rowKey, row) => {
              console.log(rowKey, row);
              handleChangeModalPage(row[0].id);
            },
            selectedRowKeys: [modalPage]
          }}
          rowKey="id"
          columns={columns}
          dataSource={pageList} />
      </Modal>
      <Divider />
    </div>
  );
};

export default Index;
