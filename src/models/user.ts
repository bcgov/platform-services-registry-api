// import {
//   User as UserInterface,
//   UserDbObject,
//   PrivateCloudRequestDbObject,
//   PrivateCloudProjectDbObject,
//   Maybe,
//   Ministry,
//   PrivateCloudProject,
//   PrivateCloudRequest
// } from "../__generated__/resolvers-types";
// import { collections } from "../db.js";
// import { KeycloakContext } from "keycloak-connect-graphql";
// import { ObjectId, ClientSession } from "mongodb";

// class Users {
  

//   private _currentUser: UserDbObject;

//   constructor(properties: Partial<UserInterface>) {
//     Object.assign(this, properties);
//   }

//   async getUser(
//     id: ObjectId,
//     session: ClientSession
//   ): Promise<UserDbObject | null> {
//     return (await collections.users.findOne(
//       { _id: id },
//       { session }
//     )) as UserDbObject;
//   }

//   async currentUser(
//     kauth: KeycloakContext,
//     session: ClientSession
//   ): Promise<UserDbObject | null> {
//     if (this._currentUser) {
//       return this._currentUser as UserDbObject;
//     }

//     if (kauth.accessToken) {
//       console.log(kauth.accessToken)
//       // const { email } = kauth.accessToken.content;
//       // this._currentUser = (await collections.users.findOne(
//       //   { email },
//       //   { session }
//       // )) as UserDbObject;
//       // return this._currentUser;
//     }

//     return null;
//   }

//   // async createUser();
// }

// export default Users;
