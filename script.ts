/**
 * npx ts-node script.ts
 *
 * result: { id: 1, email: 'alice@prisma.io', name: 'Alice' }
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here

  // 1. create a user record
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //   },
  // });
  // console.log(user);

  // 2. retrieve all user records
  // const users = await prisma.user.findMany();
  // console.log(users);

  // 3. create a User and a Post record in a nested write query
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Bob",
  //     email: "bob@prisma.io",
  //     posts: {
  //       create: [
  //         {
  //           title: "Hello World",
  //           published: true,
  //         },
  //         {
  //           title: "My second post",
  //           content: "This is still a draft",
  //         },
  //       ],
  //     },
  //   },
  // });
  // console.log(user);

  // 4. In order to also retrieve the Post records that belong to a User, you can use the include option via the posts relation field
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(usersWithPosts, { depth: null });

  // 5. check table data with GUI
  // npx prisma studio
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
