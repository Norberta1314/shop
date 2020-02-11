import React from "react";
import { Dispatch } from "redux";
import { connect } from "dva";
import { PageComponents } from "@/pages/page/type/pageComponents";
import ReactIf from "@/components/ReactIf";
import Headline from "./components/Headline";
import styles from "./index.less";
import { namespace } from "@/pages/page/edit/ModelType";

interface Prop {
  list: (PageComponents | null)[];
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

  shouldComponentUpdate(nextProps: Readonly<Prop>): boolean {
    return nextProps !== this.props;
  }

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
  }

  // eslint-disable-next-line class-methods-use-this
  handleDrag(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();
  }

  render() {
    const {list, currentEditComponent} = this.props;
    return (
      <ul className={styles.container}>
        {
          list.map((item, index) => (
            <li key={`item?.type${Math.random()}`}
                ref={`component${index}`}
                onClick={() => this.handleClickComponents(index)}
                className={`${currentEditComponent === index ? styles.choosedLi : null}`}
                draggable="true"
                onDrag={e => this.handleDrag(e)}
                onDragStart={e => this.handleDragStart(e, index)}
                onDragEnd={e => this.handleDragEnd(e)}
                onDragEnter={e => this.handleDragEnter(e, index)}
                onDragLeave={e => this.handleDragLeave(e, index)}
            >
              <ReactIf vIf={item?.headline}>
                <Headline headline={item?.headline}/>
              </ReactIf>
            </li>
          ))
        }
      </ul>
    );
  };
}

export default connect()(Index);
