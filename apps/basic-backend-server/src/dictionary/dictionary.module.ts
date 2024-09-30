import { Module } from "@nestjs/common";
import { DictionaryModuleBase } from "./base/dictionary.module.base";
import { DictionaryService } from "./dictionary.service";
import { DictionaryController } from "./dictionary.controller";
import { DictionaryResolver } from "./dictionary.resolver";

@Module({
  imports: [DictionaryModuleBase],
  controllers: [DictionaryController],
  providers: [DictionaryService, DictionaryResolver],
  exports: [DictionaryService],
})
export class DictionaryModule {}
