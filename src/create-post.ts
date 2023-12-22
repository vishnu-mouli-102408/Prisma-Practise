import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] }); // for logs

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data: {
      title: "Fist Title",
      content: "Content of the First Title",
      //   author: {
      //     connect: {
      //       id: 1,
      //     },
      //   },
      authorId: 1,
    },
  });
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
