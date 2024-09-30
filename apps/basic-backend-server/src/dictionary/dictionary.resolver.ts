import * as graphql from "@nestjs/graphql";
import { DictionaryResolverBase } from "./base/dictionary.resolver.base";
import { Dictionary } from "./base/Dictionary";
import { DictionaryService } from "./dictionary.service";

@graphql.Resolver(() => Dictionary)
export class DictionaryResolver extends DictionaryResolverBase {
  constructor(protected readonly service: DictionaryService) {
    super(service);
  }
}
