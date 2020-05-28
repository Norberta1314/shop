import React from "react";
import { Dispatch } from "redux";
import { connect } from "dva";
import { PageComponents } from "@/pages/page/type/pageComponents";
import ReactIf from "@/components/ReactIf";
import Headline from "./components/Headline";
import Image from "./components/Image";
import Carousel from "./components/Carousel";
import ShowCase from "./components/ShowCase";
import Notification from "./components/Notification";
import Nav from "./components/Nav";
import Affix from "./components/Affix";
import Goods from "./components/Goods";
import MemberCard from "./components/MemberCard";
import Coupon from "./components/Coupon";
import ShopHeader from "./components/ShopHeader";
import Divider from "./components/Divider";
import styles from "./index.less";
import { namespace } from "@/pages/page/edit/ModelType";
import { newHeadline } from "@/pages/page/type/component/Headline";
import { newImage } from "@/pages/page/type/component/Image";
import { newCarousel } from "@/pages/page/type/component/Carousel";
import { newShowCase } from "@/pages/page/type/component/ShowCase";
import { newNotification } from "@/pages/page/type/component/Notification";
import { newNav } from "@/pages/page/type/component/Nav";
import { newAffix } from "@/pages/page/type/component/Affix";
import { newGoods } from "@/pages/page/type/component/Goods";
import { newMemberCard } from "@/pages/page/type/component/MemberCard";
import { newCoupon } from "@/pages/page/type/component/Coupon";
import { newShopHeader } from "@/pages/page/type/component/ShopHeader";
import { newDivider } from "@/pages/page/type/component/Divider";

interface Prop {
  list: (PageComponents | null)[];
  backgroundColor: string;
  currentEditComponent?: number;
  dispatch?: Dispatch<any>;
}

interface State {
  dragStart: number | null;
  dragEnd: number | null;
}

class Index extends React.Component<Prop, State> {

  constructor(props: Prop) {
    super(props);
    this.state = {
      dragStart: null,
      dragEnd: null
    };
  }

  // shouldComponentUpdate(nextProps: Readonly<Prop>): boolean {
  //   return nextProps !== this.props;
  // }

  handleClickComponents(index: number) {
    const {dispatch} = this.props;
    if (dispatch) {
      dispatch({
        type: `${namespace}/save`,
        payload: {
          currentEditComponent: index,
        },
      });
    }
  };

  handleDragStart(e: React.DragEvent<HTMLLIElement>, index: number) {
    // eslint-disable-next-line react/no-string-refs
    const refs = this.refs[`component${index}`];
    if (refs) {
      if ("classList" in refs) {
        refs.classList.add("dragStart");
      }
    }
    this.setState(() => ({dragStart: index}));
    const {dispatch} = this.props;
    if (dispatch) {
      dispatch({
        type: `${namespace}/save`,
        payload: {
          dragStart: index
        }
      });
    }
  }

  handleDragEnd(e: React.DragEvent<HTMLLIElement>) {
    const {dispatch} = this.props;
    if (dispatch) {
      dispatch({
        type: `${namespace}/dragComponent`,
        payload: {
          dragStart: this.state.dragStart,
          dragEnd: this.state.dragEnd
        }
      });
    }
    e.preventDefault();
  }

  handleDragEnter(e: React.DragEvent<HTMLLIElement>, index: number) {
    // eslint-disable-next-line react/no-string-refs
    const refs = this.refs[`component${index}`];
    if (refs) {
      if ("classList" in refs) {
        refs.classList.add("dragEnter");
      }
    }
    this.setState(() => ({dragEnd: index}));
  }

  handleDragLeave(e: React.DragEvent<HTMLLIElement>, index: number) {
    // eslint-disable-next-line react/no-string-refs
    const refs = this.refs[`component${index}`];
    if (refs) {
      if ("classList" in refs) {
        refs.classList.remove("dragEnter");
      }
    }

    const {dispatch} = this.props;
    if (dispatch) {
      dispatch({
        type: `${namespace}/save`,
        payload: {
          dragEnd: this.state.dragEnd
        }
      });
    }
  }


  handleDrag(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();
  }

  render() {
    const {list, currentEditComponent} = this.props;
    return (
      <ul
        className={styles.container}
        style={{background: this.props.backgroundColor}}>
        {
          list && list.map((item, index) => (
            <li
              key={`${item?.type}-${index}`}
              ref={`component${index}`}
              onClick={() => this.handleClickComponents(index)}
              className={`${currentEditComponent === index ? styles.choosedLi : null}`}
              draggable="true"
              onDrag={e => this.handleDrag(e)}
              onDragStart={e => this.handleDragStart(e, index)}
              onDragEnd={e => this.handleDragEnd(e)}
              onDragEnter={e => this.handleDragEnter(e, index)}
              onDragLeave={e => this.handleDragLeave(e, index)}>
              <ReactIf vIf={item?.headline}>
                <Headline headline={item?.headline || newHeadline} />
              </ReactIf>
              <ReactIf vIf={item?.image}>
                <Image image={item?.image || newImage} />
              </ReactIf>
              <ReactIf vIf={item?.carousel}>
                <Carousel carousel={item?.carousel || newCarousel} />
              </ReactIf>
              <ReactIf vIf={item?.showCase}>
                <ShowCase showCase={item?.showCase || newShowCase} />
              </ReactIf>
              <ReactIf vIf={item?.notification}>
                <Notification notification={item?.notification || newNotification} />
              </ReactIf>
              <ReactIf vIf={item?.nav}>
                <Nav nav={item?.nav || newNav} />
              </ReactIf>
              <ReactIf vIf={item?.affix}>
                <Affix affix={item?.affix || newAffix} />
              </ReactIf>
              <ReactIf vIf={item?.goods}>
                <Goods goods={item?.goods || newGoods} />
              </ReactIf>
              <ReactIf vIf={item?.memberCard}>
                <MemberCard memberCard={item?.memberCard || newMemberCard} />
              </ReactIf>
              <ReactIf vIf={item?.coupon}>
                <Coupon
                  coupon={item?.coupon || newCoupon}
                  backgroundColor={this.props.backgroundColor} />
              </ReactIf>
              <ReactIf vIf={item?.shopHeader}>
                <ShopHeader shopHeader={item?.shopHeader || newShopHeader} />
              </ReactIf>
              <ReactIf vIf={item?.divider}>
                <Divider divider={item?.divider || newDivider} />
              </ReactIf>
            </li>
          ))
        }
      </ul>
    );
  };
}

export default connect()(Index);
