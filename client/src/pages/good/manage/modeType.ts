import { Good } from "@/pages/good/type/good";

export interface GoodManage {
  showAddGoodModel: boolean;
  editGood: Good | null;
  goodList: Good[];
}

export const goodManage: GoodManage = {
  showAddGoodModel: false,
  goodList: [],
  editGood: null
};

export const namespace = "goodManage";
