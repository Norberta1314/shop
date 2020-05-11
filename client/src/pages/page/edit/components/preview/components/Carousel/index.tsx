import React from "react";
import styles from './index.less'
import {Carousel} from "@/pages/page/type/component/Carousel";

interface Props {
  carousel: Carousel
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> carousel</div>
);

export default Index;
