import { PrismaService } from "nestjs-prisma";
import { Prisma, SpeakingLanguage } from "@prisma/client";

export class SpeakingLanguageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SpeakingLanguageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpeakingLanguageFindManyArgs>
  ): Promise<number> {
    return this.prisma.speakingLanguage.count(args);
  }

  async findMany<T extends Prisma.SpeakingLanguageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpeakingLanguageFindManyArgs>
  ): Promise<SpeakingLanguage[]> {
    return this.prisma.speakingLanguage.findMany(args);
  }
  async findOne<T extends Prisma.SpeakingLanguageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpeakingLanguageFindUniqueArgs>
  ): Promise<SpeakingLanguage | null> {
    return this.prisma.speakingLanguage.findUnique(args);
  }
  async create<T extends Prisma.SpeakingLanguageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpeakingLanguageCreateArgs>
  ): Promise<SpeakingLanguage> {
    return this.prisma.speakingLanguage.create<T>(args);
  }
  async update<T extends Prisma.SpeakingLanguageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpeakingLanguageUpdateArgs>
  ): Promise<SpeakingLanguage> {
    return this.prisma.speakingLanguage.update<T>(args);
  }
  async delete<T extends Prisma.SpeakingLanguageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpeakingLanguageDeleteArgs>
  ): Promise<SpeakingLanguage> {
    return this.prisma.speakingLanguage.delete(args);
  }

  async findSpeakingLanguages(
    parentId: string,
    args: Prisma.SpeakingLanguageFindManyArgs
  ): Promise<SpeakingLanguage[]> {
    return this.prisma.speakingLanguage
      .findUnique({
        where: { id: parentId },
      })
      .speakingLanguages(args);
  }

  async getSpeakingLanguage(
    parentId: string
  ): Promise<SpeakingLanguage | null> {
    return this.prisma.speakingLanguage
      .findUnique({
        where: { id: parentId },
      })
      .speakingLanguage();
  }
}
