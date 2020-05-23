import { PageComponents } from "@/pages/page/type/pageComponents";

export interface Page {
  id: number;
  title: string;
  previewImg: string;
  styleType: number; //页面样式
  mode: number; //页面归属
  components: (PageComponents | null)[];
}

export enum StyleType {
  default, self
}

export enum PageMode {
  default, self
}
