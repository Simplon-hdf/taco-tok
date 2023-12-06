/*
  Warnings:

  - A unique constraint covering the columns `[order_number]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Belong" (
    "order_number" INTEGER NOT NULL,
    "product_UUID" TEXT NOT NULL,
    "product_quantity" INTEGER NOT NULL,

    CONSTRAINT "Belong_pkey" PRIMARY KEY ("order_number","product_UUID","product_quantity")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_order_number_key" ON "Order"("order_number");

-- AddForeignKey
ALTER TABLE "Belong" ADD CONSTRAINT "Belong_product_UUID_fkey" FOREIGN KEY ("product_UUID") REFERENCES "Products"("product_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Belong" ADD CONSTRAINT "Belong_order_number_fkey" FOREIGN KEY ("order_number") REFERENCES "Order"("order_number") ON DELETE RESTRICT ON UPDATE CASCADE;
