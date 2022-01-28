import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SpeakingLanguageResolverBase } from "./base/speakingLanguage.resolver.base";
import { SpeakingLanguage } from "./base/SpeakingLanguage";
import { SpeakingLanguageService } from "./speakingLanguage.service";

@graphql.Resolver(() => SpeakingLanguage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SpeakingLanguageResolver extends SpeakingLanguageResolverBase {
  constructor(
    protected readonly service: SpeakingLanguageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
