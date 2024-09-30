import { Dictionary as TDictionary } from "../api/dictionary/Dictionary";

export const DICTIONARY_TITLE_FIELD = "key";

export const DictionaryTitle = (record: TDictionary): string => {
  return record.key?.toString() || String(record.id);
};
