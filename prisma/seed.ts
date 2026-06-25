import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import prisma from '@/lib/prisma';

dotenv.config({ path: '.env.local' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function seed() {
    const products = JSON.parse(
        readFileSync(path.join(__dirname, '/data/products.json'), 'utf-8')
    );

    console.log(`\n🌱 Seeding ${products.length} products...\n`);

    let success = 0;
    let skipped = 0;

    for (const product of products) {
        const existing = await prisma.product.findFirst({
            where: { name: product.name },
        });

        if (existing) {
            console.log(`⏭️  Skipped (already exists): ${product.name}`);
            skipped++;
            continue;
        }

        await prisma.product.create({ data: product });
        console.log(`✅ ${product.name}`);
        success++;
    }

    console.log(`\n${'─'.repeat(50)}`);
    console.log(`✅ Inserted: ${success}`);
    console.log(`⏭️  Skipped:  ${skipped}`);
    console.log(`\n🎉 Done!\n`);
}

seed()
    .catch(console.error)
    .finally(() => prisma.$disconnect());