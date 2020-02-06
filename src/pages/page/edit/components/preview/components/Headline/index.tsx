import React from "react";
import { Headline } from "@/pages/page/type/pageComponents";

interface Props {
  headline?: Headline
}

const Index = ({headline}: Props) => (
  <div>
    {headline?.title}
  </div>
);

export default Index;
