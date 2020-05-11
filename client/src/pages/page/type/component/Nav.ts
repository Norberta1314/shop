export interface Nav {
  mode: number;
  styleMode: number;
}

export enum NavMode {
  inPage, outPage
}

export enum NavStyleMode {
  char, image
}

export const newNav = {
  mode: NavMode.outPage,
  styleMode: NavStyleMode.image
};
