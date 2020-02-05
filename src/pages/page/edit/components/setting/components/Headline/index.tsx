import React from "react";
import InputText from "../common/InputText";
import { Headline, PageComponentsType } from "@/pages/page/type/pageComponents";
import { connect } from "dva";
import { Dispatch } from "redux";
import deepCopy from "@/utils/deepCopy";
import { namespace } from "@/pages/page/edit/ModelType";

interface Props {
  headline?: Headline;
  dispatch?: Dispatch<any>;
}

const Index = ({headline, dispatch}: Props) => {

  function handleChangeText(e: string) {
    const headlineLocal = deepCopy(headline);
    if (headlineLocal) {
      headlineLocal.title = e;
    }
    if (dispatch) {
      dispatch({
        type: `${namespace}/editComponent`,
        payload: {
          type: PageComponentsType.Headline,
          headline: headlineLocal
        }
      });
    }
  }

  return (
    <div>
      <InputText
        title="标题"
        text={headline?.title}
        onChangeInput={handleChangeText}/>
    </div>
  );
};

export default connect()(Index);
