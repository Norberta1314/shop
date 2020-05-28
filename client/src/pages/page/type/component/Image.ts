export interface Image {
  imgUrl: string;
  width: number;
  align: number;
}

export enum ImageAlign {
  left, center, right
}

export const imageAlignOptions = [
  {
    label: "靠左",
    value: ImageAlign.left
  }, {
    label: "居中",
    value: ImageAlign.center,
  }, {
    label: "靠右",
    value: ImageAlign.right
  },];

export const newImage: Image = {
  imgUrl: "",
  width: 300,
  align: ImageAlign.center
};
