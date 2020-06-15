import React from "react";
import styles from "./index.less";
import { Carousel as CarouselType } from "@/pages/page/type/component/Carousel";
import { Carousel } from "antd";
import { imgUrlBase } from "../../../../../../../../config/config";
import ReactIf from "@/components/ReactIf";
import CommonImage from "@/pages/page/edit/components/preview/components/commonImage";

interface Props {
  carousel: CarouselType
}

const Index: React.FC<Props> = props => (
  <div className={styles.main}>
    <Carousel autoplay={props.carousel.auto}>

      {props.carousel.imgList.length !== 0 ?
        props.carousel.imgList.map((item) => (
          <div key={item}>
            <img
              style={{width: "100%"}}
              src={`${imgUrlBase}/${item}`}
              alt="" />
          </div>
        )) : ([1, 2].map((item) => (
          <div key={item} className={styles.noImage}>
            <CommonImage src={null} />
          </div>
        )))
      }

    </Carousel>
  </div>
);

export default Index;
