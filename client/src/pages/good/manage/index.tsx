import React from "react";
import { connect } from "dva";
import Table from "./components/Table";
import styles from "./index.less";
import OperateGroup from "./components/OperateGroup";
import { GoodManage } from "@/pages/good/manage/modeType";
import { Good } from "@/pages/good/type/good";

interface Props {
  showAddGoodModel?: boolean;
  goodList?: Good[];
  editGood: Good | null;
}

const GoodManage: React.FC<Props> = (props) => {
  return (
    <div className={styles.main}>
      <OperateGroup
        showAddGoodModel={props.showAddGoodModel || false}
        editGood={props.editGood} />
      <Table goodList={props.goodList || []} />
    </div>
  );
};

export default connect(
  ({goodManage}: { goodManage: GoodManage }) =>
    ({
      showAddGoodModel: goodManage.showAddGoodModel,
      goodList: goodManage.goodList,
      editGood: goodManage.editGood
    }))(GoodManage);
