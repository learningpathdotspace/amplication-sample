import { Module } from "@nestjs/common";
import { SpeakingLanguageModuleBase } from "./base/speakingLanguage.module.base";
import { SpeakingLanguageService } from "./speakingLanguage.service";
import { SpeakingLanguageController } from "./speakingLanguage.controller";
import { SpeakingLanguageResolver } from "./speakingLanguage.resolver";

@Module({
  imports: [SpeakingLanguageModuleBase],
  controllers: [SpeakingLanguageController],
  providers: [SpeakingLanguageService, SpeakingLanguageResolver],
  exports: [SpeakingLanguageService],
})
export class SpeakingLanguageModule {}
