import { PageComponents } from "@/pages/page/type/pageComponents";

export interface Page {
  id: number;
  title: string;
  previewImg: string;
  styleType: number;
  components: (PageComponents | null)[];
}


export enum StyleType {
  default, self
}
