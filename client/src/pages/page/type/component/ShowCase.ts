export interface ShowCase {
  mode: number;
  cells: Cell[];
}

export interface Cell {
  url: string;
  width: number;
  marginLeft: number;
}

export enum ShowCaseMode {
  mode1, mode2,
}

export const newCell: Cell = {
  url: "",
  width: 115,
  marginLeft: 10,
};
export const newShowCase: ShowCase = {
  mode: ShowCaseMode.mode1,
  cells: [newCell, newCell],
};

