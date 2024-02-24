import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkDb() {
  try {
    await prisma.$connect()
    console.log('Successfully connected to the database.')
  } catch (error) {
    console.error('Error connecting to the database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

export default checkDb