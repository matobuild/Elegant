import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    await prisma.categories.create({
        data: {
            name: 'Living Room'
        }
    })
    await prisma.categories.create({
        data: {
            name: 'Bedroom'
        }
    })
    await prisma.categories.create({
        data: {
            name: 'Kitchen'
        }
    })
    await prisma.categories.create({
        data: {
            name: 'Bathroom'
        }
    })
    await prisma.categories.create({
        data: {
            name: 'Dining'
        }
    })
    await prisma.categories.create({
        data: {
            name: 'Outdoor'
        }
    })

    await prisma.products.create({
        data: {
            name: 'Loveseat Sofa',
            description: 'A cozy loveseat sofa',
            price: 200,
            image_url: 'products/Loverseat Sofa.png',
            measurements: '1.5m x 1m',
            details: 'This loveseat sofa is perfect for small spaces. The design makes it easy to fit into any room.',
            packaging: `Width: 18 " Height: 1 ½ " Length: 19 ½ " Weight: 6 lb 8 oz Package(s): 1`,
            stock: 15,
            total_stars_review : 5,
            discount : 50,
            categories: {
                create: {  name: 'Living Room' }
            }
        }
    })

    await prisma.products.create({
        data: {
            name: 'Luxury Sofa',
            description: 'This Luxury Sofa is the epitome of comfort and style. Its plush cushions and sleek design make it the perfect addition to any living room.',
            price: 500,
            image_url: 'products/Luxury Sofa.png',
            measurements: '2.5m x 1m',
            details: 'Made with high-quality materials and designed for comfort, this sofa is perfect for relaxing after a long day. The sleek design adds a touch of elegance to any room.',
            packaging: `Width: 22 " Height: 2 " Length: 23 ½ " Weight: 8 lb 8 oz Package(s): 1`,
            stock: 5,
            total_stars_review : 4,
            discount : 40,
            categories: {
                create: {  name: 'Living Room' }
            }
        }
    })
    
    await prisma.products.create({
        data: {
            name: 'Table Lamp',
            description: 'This Table Lamp provides a warm, cozy light for your space. Its sleek design and high-quality materials make it a stylish and practical addition to any room.',
            price: 50,
            image_url: 'products/Table Lamp.png',
            measurements: '0.5m x 0.2m',
            details: 'This lamp provides a warm, cozy light that\'s perfect for reading, working, or just relaxing. Its sleek design and high-quality materials make it a stylish and practical addition to any room.',
            packaging: `Width: 8 " Height: 12 " Length: 8 " Weight: 2 lb 8 oz Package(s): 1`,
            stock: 20,
            total_stars_review : 0,
            discount : 60,
            categories: {
                create: {  name: 'Living Room' }
            }
        }
    })
    
    await prisma.products.create({
        data: {
            name: 'Cozy Sofa',
            description: 'Our Cozy Sofa is the perfect blend of comfort and style. Its plush cushions and soft fabric make it a great place to relax, while its modern design adds a touch of elegance to your living room.',
            price: 300,
            image_url: 'products/Cozy Sofa.png',
            measurements: '2m x 1m',
            details: 'With its plush cushions and soft fabric, this sofa is perfect for relaxing after a long day. The modern design adds a touch of elegance to any room.',
            packaging: `Width: 20 " Height: 1 ½ " Length: 21 ½ " Weight: 7 lb 8 oz Package(s): 1`,
            stock: 10,
            total_stars_review : 4,
            discount : 20,
            categories: {
                create: {  name: 'Living Room' }
            }
        }
    })
    
    await prisma.products.create({
        data: {
            name: 'White Drawer Unit',
            description: 'Our White Drawer Unit is a versatile storage solution for any room. Its sleek design and spacious drawers make it both stylish and practical.',
            price: 150,
            image_url: 'products/White Drawer unit.png',
            measurements: '1m x 0.5m',
            details: 'This drawer unit provides ample storage space while adding a touch of style to your room. The white finish gives it a clean, modern look.',
            packaging: `Width: 21 " Height: 2 " Length: 22 ½ " Weight: 8 lb 8 oz Package(s): 1`,
            stock: 15,
            total_stars_review : 3,
            discount : 10,
            categories: {
                create: {  name: 'Bedroom' }
            }
        }
    })
    
    await prisma.products.create({
        data: {
            name: 'Black Tray Table',
            description: 'Our Black Tray Table is a versatile and stylish addition to any room. Its compact size and sleek design make it perfect for small spaces.',
            price: 75,
            image_url: 'products/Black Tray Table.png',
            measurements: '0.5m x 0.5m',
            details: 'This tray table is perfect for serving drinks or snacks, and its sleek design adds a touch of modern style to any room.',
            packaging: `Width: 12 " Height: 1 " Length: 12 ½ " Weight: 3 lb 8 oz Package(s): 1`,
            stock: 20,
            total_stars_review : 5,
            discount : 15,
            categories: {
                create: {  name: 'Living Room' }
            }
        }
    })
    
    await prisma.products.create({
        data: {
            name: 'Modern Table Lamp',
            description: 'This Modern Table Lamp provides a bright, focused light for your workspace or bedside table. Its sleek design and high-quality materials make it a stylish and practical addition to any room.',
            price: 60,
            image_url: 'products/table Lamp2.png',
            measurements: '0.4m x 0.2m',
            details: 'This lamp provides a bright, focused light that\'s perfect for reading, working, or just relaxing. Its sleek design and high-quality materials make it a stylish and practical addition to any room.',
            packaging: `Width: 7 " Height: 13 " Length: 7 " Weight: 2 lb 8 oz Package(s): 1`,
            stock: 15,
            total_stars_review : 5,
            discount : 30,
            categories: {
                create: {  name: 'Living Room' }
            }
        }
    })

    await prisma.products.create({
        data: {
            name: 'Black Brow Side Table',
            description: 'Our Black Brow Side Table is a stylish and practical addition to any room. Its compact size and sleek design make it perfect for small spaces.',
            price: 80,
            image_url: 'products/Black Brow Side Table.png',
            measurements: '0.5m x 0.5m',
            details: 'This side table provides a convenient surface for drinks or books, and its sleek design adds a touch of modern style to any room.',
            packaging: `Width: 12 " Height: 1 " Length: 12 ½ " Weight: 3 lb 8 oz Package(s): 1`,
            stock: 20,
            total_stars_review : 5,
            discount : 20,
            categories: {
                create: {  name: 'Living Room' }
            }
        }
    })
    
    await prisma.products.create({
        data: {
            name: 'Light Beige Pillow',
            description: 'Our Light Beige Pillow is a comfortable and stylish addition to any sofa or bed. Its soft fabric and neutral color make it versatile and cozy.',
            price: 25,
            image_url: 'products/Light Beige Pillow.png',
            measurements: '0.5m x 0.5m',
            details: 'This pillow is perfect for adding a touch of comfort and style to any room. The light beige color complements a variety of decor styles.',
            packaging: `Width: 10 " Height: 6 " Length: 10 " Weight: 1 lb 8 oz Package(s): 1`,
            stock: 30,
            total_stars_review : 4,
            discount : 10,
            categories: {
                create: {  name: 'Bedroom' }
            }
        }
    })

    await prisma.products.create({
        data: {
            name: 'Table Lamp',
            description: 'This Table Lamp provides a warm, cozy light for your space. Its sleek design and high-quality materials make it a stylish and practical addition to any room.',
            price: 50,
            image_url: 'products/Table Lamp3.png',
            measurements: '0.5m x 0.2m',
            details: 'This lamp provides a warm, cozy light that\'s perfect for reading, working, or just relaxing. Its sleek design and high-quality materials make it a stylish and practical addition to any room.',
            packaging: `Width: 8 " Height: 12 " Length: 8 " Weight: 2 lb 8 oz Package(s): 1`,
            stock: 20,
            total_stars_review : 5,
            discount : 10,
            categories: {
                create: {  name: 'Living Room' }
            }
        }
    })
    
    await prisma.products.create({
        data: {
            name: 'Bamboo Basket',
            description: 'Our Bamboo Basket is a practical and stylish storage solution. Its natural material and woven design add a touch of rustic charm to any room.',
            price: 30,
            image_url: 'products/Bamboo Basket.png',
            measurements: '0.5m x 0.5m',
            details: 'This basket is perfect for storing blankets, toys, or other items. The bamboo material is durable and eco-friendly.',
            packaging: `Width: 12 " Height: 12 " Length: 12 " Weight: 2 lb 8 oz Package(s): 1`,
            stock: 25,
            total_stars_review : 4,
            discount : 20,
            categories: {
                create: {  name: 'Living Room' }
            }
        }
    })
    

    await prisma.products.create({
        data: {
            name: 'Off-white Pillow',
            description: 'Our Off-white Pillow is a comfortable and stylish addition to any sofa or bed. Its soft fabric and neutral color make it versatile and cozy.',
            price: 25,
            image_url: 'products/Off-white Pillow.png',
            measurements: '0.5m x 0.5m',
            details: 'This pillow is perfect for adding a touch of comfort and style to any room. The off-white color complements a variety of decor styles.',
            packaging: `Width: 10 " Height: 6 " Length: 10 " Weight: 1 lb 8 oz Package(s): 1`,
            stock: 30,
            total_stars_review : 5,
            discount : 30,
            categories: {
                create: {  name: 'Bedroom' }
            }
        }
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })