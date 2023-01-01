import {
  CreateUserInput,
  MutationResolvers
} from "__generated__/resolvers-types";
import { Prisma as PrismaType } from "@prisma/client";

export const createUser: MutationResolvers = async (
  _,
  { input }: { input: CreateUserInput },
  { prisma }
) => {
  let user;

  try {
    user = await prisma.user.create({
      data: input
    });
  } catch (e) {
    if (e instanceof PrismaType.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        throw new Error("User already exists.");
      }
    }
    throw e;
  }

  return user;
};
