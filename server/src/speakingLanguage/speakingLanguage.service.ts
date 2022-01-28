import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SpeakingLanguageServiceBase } from "./base/speakingLanguage.service.base";

@Injectable()
export class SpeakingLanguageService extends SpeakingLanguageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
