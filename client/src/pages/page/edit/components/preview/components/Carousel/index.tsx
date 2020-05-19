import React from "react";
import styles from "./index.less";
import { Carousel as CarouselType } from "@/pages/page/type/component/Carousel";
import { Carousel } from "antd";
import { imgUrlBase } from "../../../../../../../../config/config";

interface Props {
  carousel: CarouselType
}

const Index: React.FC<Props> = props => (
  <div className={styles.main}>
    <Carousel autoplay={props.carousel.auto}>
      {
        props.carousel.imgList.map((item) => (
          <div key={item}>
            <img
              src={`${imgUrlBase}/${item}`}
              alt="" />
          </div>
        ))
      }
    </Carousel>
  </div>
);

export default Index;
