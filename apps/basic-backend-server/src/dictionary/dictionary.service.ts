import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DictionaryServiceBase } from "./base/dictionary.service.base";

@Injectable()
export class DictionaryService extends DictionaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
