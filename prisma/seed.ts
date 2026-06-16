import prisma from "@/lib/prisma";
import { products } from "./data/products";

async function main() {
    console.log("Start seeding...");
    
    await prisma.product.createMany({
        data: products,
        skipDuplicates: true,
    });

    console.log("Seeding finished.");
    
}

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(0);
})