/*
  Warnings:

  - Made the column `name` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image_url` on table `order_items` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "order_items" ADD COLUMN     "category_id" INTEGER,
ADD COLUMN     "details" VARCHAR(255),
ADD COLUMN     "discount" INTEGER DEFAULT 0,
ADD COLUMN     "measurements" VARCHAR(255),
ADD COLUMN     "packaging" VARCHAR(255),
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "image_url" SET NOT NULL;
