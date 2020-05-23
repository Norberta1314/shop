import { success, fail } from "@/utils/request";

export interface Result<S> {
  data: S;
  code?: success | fail;
}
