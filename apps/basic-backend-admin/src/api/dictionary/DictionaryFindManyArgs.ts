import { DictionaryWhereInput } from "./DictionaryWhereInput";
import { DictionaryOrderByInput } from "./DictionaryOrderByInput";

export type DictionaryFindManyArgs = {
  where?: DictionaryWhereInput;
  orderBy?: Array<DictionaryOrderByInput>;
  skip?: number;
  take?: number;
};
