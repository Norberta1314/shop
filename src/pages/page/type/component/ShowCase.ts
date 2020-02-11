export interface ShowCase {
  mode: number;
  imgList: string[];
}

export enum ShowCaseMode {
  mode1, mode2,
}


export const newShowCase: ShowCase = {
  mode: ShowCaseMode.mode1,
  imgList: [],
};
