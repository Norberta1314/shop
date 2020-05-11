import React from "react";
import styles from "./index.less";
import { MemberCard } from "@/pages/page/type/component/MemberCard";

interface Props {
  memberCard: MemberCard
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> memberCard</div>
);

export default Index;
