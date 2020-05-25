import { PageComponents } from "@/pages/page/type/pageComponents";

export interface PageBase {
  id: number;
  shopId: number;
  title: string;
  previewImg: string;
  styleType: number; //页面样式
  mode: number; //页面归属
  isDelete: boolean;
}

export interface Page extends PageBase {
  components: (PageComponents | null)[];
}

export interface PageHttp extends PageBase {
  components: string | null;
}


export enum StyleType {
  default, self
}

export enum PageMode {
  default, self
}
