import React, { useState } from "react";
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

const Index = ({list, dispatch, currentEditComponent}: Prop) => {
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragEnd, setDragEnd] = useState<number | null>(null);

  function handleClickComponents(index: number) {
    if (dispatch) {
      dispatch({
        type: `${namespace}/save`,
        payload: {
          currentEditComponent: index,
        },
      });
    }
  };

  function handleDragStart(e: React.DragEvent<HTMLLIElement>, index: number) {
    setDragStart(index);
    setDragEnd(index);
    e.preventDefault();
    console.log("drag start", index);
  }

  function handleDragEnd(e: React.DragEvent<HTMLLIElement>) {
    setDragStart(null);
    console.log("drag end");
    e.preventDefault();
  }

  function handleDrag(e: React.DragEvent<HTMLLIElement>, index: number) {
    console.log("drag", index);
    // swapDrag(index)
    e.preventDefault();
  }

  function swapDrag(index: number) {
    if (dragStart !== null) {
      if (dispatch) {
        dispatch({
          type: `${namespace}/dragComponent`,
          payload: {
            dragStart,
            dragEnd: index,
          },
        });
      }
    }
  }

  function handleDragEnter(e: React.DragEvent<HTMLLIElement>, index: number) {
    console.log("drag enter", index);
    swapDrag(index)
    if (dragEnd !== index) {
      setDragEnd(index);
      swapDrag(index);
    }
    e.preventDefault();
  }

  function handleDragOver(e: React.DragEvent<HTMLLIElement>, index: number) {
    e.preventDefault();
  }

  function handleDragLeave(index: number) {
    console.log("drag leave", index);
  }

  function liClassName(index: number) {
    return `${currentEditComponent === index ? styles.choosedLi : null} ${dragStart === index ? styles.dragStart : null}`;
  }

  return (
    <ul className={styles.container}>
      {
        list.map((item, index) => (
          <li key={`item?.type${Math.random()}`}
              // onClick={() => handleClickComponents(index)}
              className={liClassName(index)}
              draggable="true"
              onDrag={(e) => handleDrag(e, index)}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={(e) => handleDragEnd(e)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={() => handleDragLeave(index)}
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

export default connect()(Index);
