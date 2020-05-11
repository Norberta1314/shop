import React from "react";
import { SketchPicker } from "react-color";

interface Props {
  title: string;
  value: string;
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => {
  return (
    <SketchPicker />
  );
};
