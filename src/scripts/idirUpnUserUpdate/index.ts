import fs from 'fs/promises';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(
    {
    datasources: {
      db: {
        url: 'mongodb+srv://challenge:uYuMturLtSasyUig@cluster0.v8ikp.mongodb.net/zhanna?retryWrites=true&w=majority',
      },
    },
  }
  );

  
const users = await prisma.user.findMany({
    // where: {
    //     OR: [
    //       {
    //         idir: "",
    //       },
    //       {
    //          upn: "",
    //     },
    //     ],}
});

  console.log(users)


  //db.collection.updateMany({}, {$set:{fieldName: "value"}})
  //port-forward 'cluster0.v8ikp.mongodb.net/zhanna?retryWrites=true&w=majority'
  //port-forward cluster0-shard-00-00.abcde.mongodb.net:27017

