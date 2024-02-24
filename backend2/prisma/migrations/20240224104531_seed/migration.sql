/*
  Warnings:

  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image_url` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `stock` to the `products` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `roles` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "details" VARCHAR(255),
ADD COLUMN     "measurements" VARCHAR(255),
ADD COLUMN     "packaging" VARCHAR(255),
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "image_url" SET NOT NULL,
DROP COLUMN "stock",
ADD COLUMN     "stock" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "username" SET NOT NULL,
ALTER COLUMN "user_password" SET NOT NULL,
ALTER COLUMN "roles" SET NOT NULL;
