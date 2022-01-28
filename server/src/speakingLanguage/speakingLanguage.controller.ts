import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpeakingLanguageService } from "./speakingLanguage.service";
import { SpeakingLanguageControllerBase } from "./base/speakingLanguage.controller.base";

@swagger.ApiTags("speaking-languages")
@common.Controller("speaking-languages")
export class SpeakingLanguageController extends SpeakingLanguageControllerBase {
  constructor(
    protected readonly service: SpeakingLanguageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
