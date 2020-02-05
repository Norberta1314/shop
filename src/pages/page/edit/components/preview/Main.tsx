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
  dispatch?: Dispatch<any>;
}

const Index = ({list, dispatch}: Prop) => {
  function handleClickComponents(index: number) {
    if (dispatch) {
      dispatch({
        type: `${namespace}/save`,
        payload: {
          currentEditComponent: index
        }
      });
    }
  }

  return (
    <ul className={styles.container}>
      {
        list.map((item, index) => (
          <li key={`item?.type${Math.random()}`}
              onClick={() => handleClickComponents(index)}>
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
