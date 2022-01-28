import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TrackingResolverBase } from "./base/tracking.resolver.base";
import { Tracking } from "./base/Tracking";
import { TrackingService } from "./tracking.service";

@graphql.Resolver(() => Tracking)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TrackingResolver extends TrackingResolverBase {
  constructor(
    protected readonly service: TrackingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
