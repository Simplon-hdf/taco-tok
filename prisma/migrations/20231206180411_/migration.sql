/*
  Warnings:

  - You are about to drop the column `product_UUID` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "belong_Products";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "product_UUID";
