import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TrackingServiceBase } from "./base/tracking.service.base";

@Injectable()
export class TrackingService extends TrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
