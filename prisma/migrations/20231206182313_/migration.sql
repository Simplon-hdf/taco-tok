/*
  Warnings:

  - The primary key for the `Belong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_quantity` on the `Belong` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Belong" DROP CONSTRAINT "Belong_pkey",
DROP COLUMN "product_quantity",
ADD CONSTRAINT "Belong_pkey" PRIMARY KEY ("order_number", "product_UUID");
