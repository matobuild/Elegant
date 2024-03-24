/*
  Warnings:

  - You are about to drop the column `address` on the `shipping` table. All the data in the column will be lost.
  - Added the required column `email` to the `shipping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `shipping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `shipping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `shipping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `shipping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street_address` to the `shipping` table without a default value. This is not possible if the table is not empty.
  - Made the column `city` on table `shipping` required. This step will fail if there are existing NULL values in that column.
  - Made the column `zip_code` on table `shipping` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `shipping` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shipping_method` on table `shipping` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "shipping" DROP COLUMN "address",
ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "first_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "last_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "phone" VARCHAR(255) NOT NULL,
ADD COLUMN     "state" VARCHAR(255) NOT NULL,
ADD COLUMN     "street_address" VARCHAR(255) NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "zip_code" SET NOT NULL,
ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "shipping_method" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;
