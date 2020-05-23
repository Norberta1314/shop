export interface ShowCase {
  mode: number;
  cells: ShowCaseCell[];
}

export interface ShowCaseCell {
  imgUrl: string;
  width: number;
  marginLeft: number;
}

export enum ShowCaseMode {
  mode1, mode2,
}

export const newCell: ShowCaseCell = {
  imgUrl: "",
  width: 115,
  marginLeft: 10,
};
export const newShowCase: ShowCase = {
  mode: ShowCaseMode.mode1,
  cells: [newCell, newCell],
};

