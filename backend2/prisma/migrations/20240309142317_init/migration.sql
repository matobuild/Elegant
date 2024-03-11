/*
  Warnings:

  - The `type` column on the `carts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "cartsType" AS ENUM ('wishlist', 'checkoutCart');

-- AlterTable
ALTER TABLE "carts" DROP COLUMN "type",
ADD COLUMN     "type" "cartsType";
