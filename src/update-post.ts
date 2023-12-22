import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] }); // for logs

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      title: "Updated first title",
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
