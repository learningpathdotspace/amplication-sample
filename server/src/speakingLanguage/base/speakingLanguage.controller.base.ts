import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { SpeakingLanguageService } from "../speakingLanguage.service";
import { SpeakingLanguageCreateInput } from "./SpeakingLanguageCreateInput";
import { SpeakingLanguageWhereInput } from "./SpeakingLanguageWhereInput";
import { SpeakingLanguageWhereUniqueInput } from "./SpeakingLanguageWhereUniqueInput";
import { SpeakingLanguageFindManyArgs } from "./SpeakingLanguageFindManyArgs";
import { SpeakingLanguageUpdateInput } from "./SpeakingLanguageUpdateInput";
import { SpeakingLanguage } from "./SpeakingLanguage";
@swagger.ApiBearerAuth()
export class SpeakingLanguageControllerBase {
  constructor(
    protected readonly service: SpeakingLanguageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "SpeakingLanguage",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: SpeakingLanguage })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: SpeakingLanguageCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SpeakingLanguage> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "SpeakingLanguage",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"SpeakingLanguage"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        speakingLanguage: data.speakingLanguage
          ? {
              connect: data.speakingLanguage,
            }
          : undefined,
      },
      select: {
        code: true,
        createdAt: true,
        id: true,

        speakingLanguage: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "SpeakingLanguage",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [SpeakingLanguage] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => SpeakingLanguageFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SpeakingLanguage[]> {
    const args = plainToClass(SpeakingLanguageFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "SpeakingLanguage",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        code: true,
        createdAt: true,
        id: true,

        speakingLanguage: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "SpeakingLanguage",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: SpeakingLanguage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SpeakingLanguageWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SpeakingLanguage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "SpeakingLanguage",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        code: true,
        createdAt: true,
        id: true,

        speakingLanguage: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "SpeakingLanguage",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: SpeakingLanguage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SpeakingLanguageWhereUniqueInput,
    @common.Body()
    data: SpeakingLanguageUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SpeakingLanguage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SpeakingLanguage",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"SpeakingLanguage"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          speakingLanguage: data.speakingLanguage
            ? {
                connect: data.speakingLanguage,
              }
            : undefined,
        },
        select: {
          code: true,
          createdAt: true,
          id: true,

          speakingLanguage: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "SpeakingLanguage",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: SpeakingLanguage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SpeakingLanguageWhereUniqueInput
  ): Promise<SpeakingLanguage | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          code: true,
          createdAt: true,
          id: true,

          speakingLanguage: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/speakingLanguages")
  @nestAccessControl.UseRoles({
    resource: "SpeakingLanguage",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => SpeakingLanguageWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManySpeakingLanguages(
    @common.Req() request: Request,
    @common.Param() params: SpeakingLanguageWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SpeakingLanguage[]> {
    const query: SpeakingLanguageWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "SpeakingLanguage",
    });
    const results = await this.service.findSpeakingLanguages(params.id, {
      where: query,
      select: {
        code: true,
        createdAt: true,
        id: true,

        speakingLanguage: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/speakingLanguages")
  @nestAccessControl.UseRoles({
    resource: "SpeakingLanguage",
    action: "update",
    possession: "any",
  })
  async createSpeakingLanguages(
    @common.Param() params: SpeakingLanguageWhereUniqueInput,
    @common.Body() body: SpeakingLanguageWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      speakingLanguages: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SpeakingLanguage",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"SpeakingLanguage"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/speakingLanguages")
  @nestAccessControl.UseRoles({
    resource: "SpeakingLanguage",
    action: "update",
    possession: "any",
  })
  async updateSpeakingLanguages(
    @common.Param() params: SpeakingLanguageWhereUniqueInput,
    @common.Body() body: SpeakingLanguageWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      speakingLanguages: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SpeakingLanguage",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"SpeakingLanguage"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/speakingLanguages")
  @nestAccessControl.UseRoles({
    resource: "SpeakingLanguage",
    action: "update",
    possession: "any",
  })
  async deleteSpeakingLanguages(
    @common.Param() params: SpeakingLanguageWhereUniqueInput,
    @common.Body() body: SpeakingLanguageWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      speakingLanguages: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SpeakingLanguage",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"SpeakingLanguage"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
