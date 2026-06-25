import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from 'fs';
import { fileURLToPath } from "url";
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_DIR = path.join(__dirname, '../products');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define the type for the result
type ImageInfo = {
    url: string;
    publicId: string;
};

type UploadResult = {
    [slug: string]: ImageInfo[];
};

async function uploadAll() {
    const productFolders = fs.readdirSync(PRODUCTS_DIR).filter(f => fs.statSync(path.join(PRODUCTS_DIR, f)).isDirectory());

    const result: UploadResult = {};

    for (const slug of productFolders) {
        const folderPath = path.join(PRODUCTS_DIR, slug);
        const images = fs
            .readdirSync(folderPath)
            .filter(f => /\.(jpg|jpeg|png|webp|avif)$/i.test(f))
            .sort();

        console.log(`\n📦 ${slug} — ${images.length} images`);
        result[slug] = [];

        for (const image of images) {
            const imagePath = path.join(folderPath, image);
            const res = await cloudinary.uploader.upload(imagePath, {
                folder: `products/${slug}`,
                use_filename: true,
                unique_filename: false,
                overwrite: false, // skips re-uploading if already exists
            });

            result[slug].push({
                url: res.secure_url,
                publicId: res.public_id,
            });

            console.log(`  ✅ ${image}`);

        }

        // Save urls locally — this file is also gitignored
        const outPath = path.join(__dirname, 'cloudinary-urls.json');
        fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
        console.log(`\n🎉 Done! URLs saved to scripts/cloudinary-urls.json`);
    }
}

uploadAll().catch(console.error);
