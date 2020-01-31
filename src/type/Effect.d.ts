import {AnyAction} from "redux";
import { EffectsCommandMap } from "dva";

export  type Effect<S = any> = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: S) => T) => T },
) => void;
