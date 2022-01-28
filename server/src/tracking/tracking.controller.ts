import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TrackingService } from "./tracking.service";
import { TrackingControllerBase } from "./base/tracking.controller.base";

@swagger.ApiTags("trackings")
@common.Controller("trackings")
export class TrackingController extends TrackingControllerBase {
  constructor(
    protected readonly service: TrackingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
