export interface Page {
  id: number;
  title: string;
  previewImg: string;
  styleType: number;
}

export enum StyleType {
  default, self
}
