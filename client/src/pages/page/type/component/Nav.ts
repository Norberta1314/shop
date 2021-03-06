export interface Nav {
  navNumber: number;
  styleMode: number;
  cells: NavCell[];
}

export interface NavCell {
  text: string;
  imgUrl: string;
  color: string;
  linkId: number;
}

export enum NavStyleMode {
  char, image
}

export const newNavCell: NavCell = {
  text: "",
  imgUrl: "",
  color: "",
  linkId: 0,
};

export const newNav: Nav = {
  navNumber: 3,
  styleMode: NavStyleMode.char,
  cells: [newNavCell, newNavCell, newNavCell]
};

export const navNumberOptions = [
  {
    label: "三个",
    value: 3
  }, {
    label: "四个",
    value: 4,
  }, {
    label: "五个",
    value: 5,
  }];

export const navStyleOptions = [
  {
    label: "图片",
    value: NavStyleMode.image
  }, {
    label: "文字",
    value: NavStyleMode.char
  }
];
