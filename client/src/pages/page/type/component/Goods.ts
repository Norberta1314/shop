export interface Goods {
  mode: number;
}

export enum GoodsMode {
  good, new, hot
}

export const newGoods: Goods = {
  mode: GoodsMode.good
};