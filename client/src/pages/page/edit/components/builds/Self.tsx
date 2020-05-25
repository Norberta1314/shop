import React from "react";
import { Button } from "antd";
import { connect } from "dva";
import { Dispatch } from "redux";
import { buildList } from "@/pages/page/type/buildList";
import styles from "./index.less";
import { namespace, PageEdit } from "@/pages/page/edit/ModelType";

interface Prop {
  dispatch?: Dispatch<any>;
  dragEnd?: number | null;
}

interface State {
  dragStart: number | null;
}


class Self extends React.Component<Prop, State> {

  constructor(props: Prop) {
    super(props);
    this.state = {
      dragStart: null
    };
  }

  shouldComponentUpdate(nextProps: Readonly<Prop>): boolean {
    return false;
  }

  handleClickComponents(type: number, position: number | null = null) {
    const {dispatch} = this.props;
    if (dispatch) {
      dispatch({
        type: "pageEdit/addComponent",
        payload: {
          type,
          position
        }
      });
    }
    return false;
  }


  handleDrag(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();
  }

  handleDragEnd(e: React.DragEvent<HTMLLIElement>) {
    const {dragEnd} = this.props;
    if (dragEnd !== null) {
      if (this.state.dragStart !== null) {
        this.handleClickComponents(this.state.dragStart, dragEnd);
      }
    }
    e.preventDefault();
  }

  handleDragStart(e: React.DragEvent<HTMLLIElement>, type: number) {
    this.setState(() => ({dragStart: type}));
    const {dispatch} = this.props;
    if (dispatch) {
      dispatch({
        type: `${namespace}/save`,
        payload: {
          dragEnd: null
        }
      });
    }
  }

  render() {
    return (
      <div className={styles.self}>
        <div className={styles.title}>基础组件</div>
        <ul>
          {
            buildList.baseList.map((item) => (
              <li
                key={item.type}
                draggable="true"
                onDragStart={e => this.handleDragStart(e, item.type)}
                onDrag={e => this.handleDrag(e)}
                onDragEnd={e => this.handleDragEnd(e)}>
                <Button
                  onClick={() => this.handleClickComponents(item.type)}
                  icon={item.icon}>{item.title}</Button>
              </li>
            ))
          }
        </ul>
        <div className={styles.title}>营销组件</div>
        <ul>
          {
            buildList.marketList.map((item) => (
              <li
                key={item.type}
                draggable="true"
                onDragStart={e => this.handleDragStart(e, item.type)}
                onDrag={e => this.handleDrag(e)}
                onDragEnd={e => this.handleDragEnd(e)}>
                <Button
                  onClick={() => this.handleClickComponents(item.type)}
                  icon={item.icon}>{item.title}</Button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  };
};

export default connect(({pageEdit}: { pageEdit: PageEdit }) =>
  ({
    dragEnd: pageEdit.dragEnd
  })
)(Self);
