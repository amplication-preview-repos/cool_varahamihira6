import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DictionaryService } from "./dictionary.service";
import { DictionaryControllerBase } from "./base/dictionary.controller.base";

@swagger.ApiTags("dictionaries")
@common.Controller("dictionaries")
export class DictionaryController extends DictionaryControllerBase {
  constructor(protected readonly service: DictionaryService) {
    super(service);
  }
}
