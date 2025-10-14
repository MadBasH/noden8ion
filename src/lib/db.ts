import { PrismaClient } from "@/generated/prisma";

// the part uneffected to hotreload
const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};

// for hotreload db to discover changes
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;