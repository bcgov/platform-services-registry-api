import {
  ProjectMetaDataInput,
  CommonComponentsInput,
  MutationResolvers,
  MutationCustomPrivateCloudProjectRequestArgs
} from "__generated__/resolvers-types";

export const customPrivateCloudProjectRequest: MutationResolvers = (
  _,
  args: MutationCustomPrivateCloudProjectRequestArgs,
  { prisma }
) => {
  console.log(args);

  // const result = prisma.createProjectRequest({
  //   data: {
  //     createdBy:

  // return result;

  return {};
};
