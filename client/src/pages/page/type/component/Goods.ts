export interface Goods {
  goodList: number[];
  backgroundColor: string;
  isBorderRadius: boolean;
  isBorder: boolean;
  mode: number;
}

export enum GoodMode {
  one, two
}

export const goodModeOptions = [
  {
    label: "大图",
    value: GoodMode.one
  }, {
    label: "小图",
    value: GoodMode.two
  }
];

export const newGoods: Goods = {
  goodList: [],
  backgroundColor: "",
  isBorder: false,
  isBorderRadius: false,
  mode: GoodMode.two
};
