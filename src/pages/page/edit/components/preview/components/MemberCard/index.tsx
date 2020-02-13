import React from "react";
import styles from './index.less'
import { Image } from "@/pages/page/type/component/Image";

interface Props {
  image?: Image
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> image</div>
);

export default Index;
