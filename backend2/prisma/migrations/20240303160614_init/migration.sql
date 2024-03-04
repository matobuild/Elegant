/*
  Warnings:

  - Added the required column `final_price` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "final_price" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "time_added" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;
