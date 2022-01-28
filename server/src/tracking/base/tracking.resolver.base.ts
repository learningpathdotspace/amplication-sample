import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateTrackingArgs } from "./CreateTrackingArgs";
import { UpdateTrackingArgs } from "./UpdateTrackingArgs";
import { DeleteTrackingArgs } from "./DeleteTrackingArgs";
import { TrackingFindManyArgs } from "./TrackingFindManyArgs";
import { TrackingFindUniqueArgs } from "./TrackingFindUniqueArgs";
import { Tracking } from "./Tracking";
import { TrackingService } from "../tracking.service";

@graphql.Resolver(() => Tracking)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TrackingResolverBase {
  constructor(
    protected readonly service: TrackingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "read",
    possession: "any",
  })
  async _trackingsMeta(
    @graphql.Args() args: TrackingFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Tracking])
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "read",
    possession: "any",
  })
  async trackings(
    @graphql.Args() args: TrackingFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tracking[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tracking",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Tracking, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "read",
    possession: "own",
  })
  async tracking(
    @graphql.Args() args: TrackingFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tracking | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Tracking",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Tracking)
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "create",
    possession: "any",
  })
  async createTracking(
    @graphql.Args() args: CreateTrackingArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tracking> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Tracking",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Tracking"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Tracking)
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "update",
    possession: "any",
  })
  async updateTracking(
    @graphql.Args() args: UpdateTrackingArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tracking | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Tracking",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Tracking"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tracking)
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "delete",
    possession: "any",
  })
  async deleteTracking(
    @graphql.Args() args: DeleteTrackingArgs
  ): Promise<Tracking | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
