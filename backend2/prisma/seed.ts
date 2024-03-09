import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker'
import {  UniqueEnforcer } from 'enforce-unique';

const catagoriesName = [
    { name: 'Living Room' },
    { name: 'Bed Room' },
    { name: 'Dinning Room' },
    { name: 'Kitchen' },
    { name: 'Bathroom' },
    { name: 'Office' },
    { name: 'Outdoor' },
    { name: 'Kids' },
    { name: 'Accessories' },
]

const uniqueEnforcerName = new UniqueEnforcer();
uniqueEnforcerName.reset();

const productsData = async () => {
    const category = faker.helpers.arrayElement(['Living Room', 'Bed Room', 'Dinning Room', 'Kitchen', 'Bathroom', 'Office', 'Outdoor', 'Kids', 'Accessories']);
    const categoryModel = await prisma.categories.findFirst({ where: { name: category } });
    
    const price = faker.helpers.rangeToNumber({ min: 1, max: 1000 })
    const discount = faker.helpers.rangeToNumber({ min: 0, max: 80 })
    const afterDiscount = (price: number, discount: number) => {
        return price - (price * discount) / 100
    }
    
    return {
        name: uniqueEnforcerName.enforce(()=>{ return faker.commerce.productName() },{
            maxTime: 1000,
            maxRetries: 1000,
          }),
        description: faker.commerce.productDescription(),
        price: price,
        final_price: afterDiscount(price, discount),
        image_url: faker.helpers.arrayElement(['products/Bamboo Basket.png', 'products/Black Brow Side Table.png', 'products/Black Tray Table.png', 'products/Cozy Sofa.png', 'products/Light Beige Pillow.png', 'products/Loverseat Sofa.png', 'products/Luxury Sofa.png', 'products/Off-white Pillow.png', 'products/Table Lamp.png', 'products/Table Lamp2.png', 'products/Table Lamp3.png', 'products/White Drawer unit.png']),
        measurements: `${faker.helpers.rangeToNumber({ min: 1, max: 100 })}m x ${faker.helpers.rangeToNumber({ min: 1, max: 100 })}m`,
        details: faker.lorem.paragraph(),
        packaging: `Width: ${faker.helpers.rangeToNumber({ min: 1, max: 100 })} " Height: ${faker.helpers.rangeToNumber({ min: 1, max: 100 })} " Length: ${faker.helpers.rangeToNumber({ min: 1, max: 100 })} " Weight: ${faker.helpers.rangeToNumber({ min: 1, max: 100 })} lb ${faker.helpers.rangeToNumber({ min: 1, max: 100 })} oz Package(s): ${faker.helpers.rangeToNumber({ min: 1, max: 100 })}`,
        stock: faker.helpers.rangeToNumber({ min: 0, max: 100 }),
        total_stars_review: faker.helpers.rangeToNumber({ min: 0, max: 5 }),
        discount: discount,
        category_id: categoryModel?.category_id,
    }
}

async function main() {
    await prisma.categories.createMany({
        data: catagoriesName,
    })

    for (let index = 0; index < 1000; index++) {
        await prisma.products.create({
            data: await productsData()
        })
        
    }
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