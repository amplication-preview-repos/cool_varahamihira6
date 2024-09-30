import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DictionaryWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  value?: StringNullableFilter;
};
