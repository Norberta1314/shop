import React from "react";
import styles from "./index.less";
import { Goods } from "@/pages/page/type/component/Goods";
import { Good } from "@/pages/good/type/good";
import { getGoodListByIds } from "@/pages/good/manage/service";
import CommonImage from "@/pages/page/edit/components/preview/components/commonImage";

interface Props {
  goods: Goods
}

interface State {
  goodInfoList: Good[]
}

class Index extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      goodInfoList: []
    };
  }

  getGoodListByIds() {
    getGoodListByIds(this.props.goods.goodList).then(res => {
      this.setState({
        goodInfoList: res
      });
    });
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    return (JSON.stringify(nextProps) !== JSON.stringify(this.props)) || (nextState !== this.state);
  }


  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.getGoodListByIds();
    }
  }

  componentDidMount(): void {
    this.getGoodListByIds();
  }

  render() {
    const {goods} = this.props;
    const {goodInfoList} = this.state;
    return (
      <div className={styles.main}>
        {goodInfoList.map(item =>
          <div
            key={item.id}
            className={styles.warp}>
            <div className={`${styles.block} ${goods.isBorder ? styles.blockBorder : null}`}>
              <CommonImage
                src={item.imgUrl}
                width={400}
                height={400} />
              <div className={styles.textBlock}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.brand}>
                  {item.brand} | {item.info}
                </div>
                <div className={styles.price}>
                  <span className={styles.rmb}>¥</span>{item.price}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

};

export default Index;
