import React from "react";
import { Headline } from "@/pages/page/type/component/Headline";

interface Props {
  headline: Headline
}

const Index = ({headline}: Props) => {
  const styles = {
    fontSize: `${headline.fontSize}px`,
    color: headline.fontColor,
    background: headline.backgroundColor,
    textAlign: 'center'
  };

  return (
    <div style={styles}>
      {headline.title}
    </div>
  );
};

export default Index;
