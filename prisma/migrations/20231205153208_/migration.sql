-- CreateTable
CREATE TABLE "Products" (
    "product_UUID" VARCHAR(36) NOT NULL,
    "product_name" VARCHAR(20) NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_quantity" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("product_UUID")
);

-- CreateTable
CREATE TABLE "User" (
    "user_UUID" VARCHAR(36) NOT NULL,
    "user_pseudo" VARCHAR(20) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "user_password" VARCHAR(72) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_UUID")
);

-- CreateTable
CREATE TABLE "Order" (
    "order_number" SERIAL NOT NULL,
    "order_total_cost_ht" INTEGER NOT NULL,
    "order_total_quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliver_at" TIMESTAMP(3) NOT NULL,
    "user_UUID" VARCHAR(36) NOT NULL,
    "product_UUID" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("order_number")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_pseudo_key" ON "User"("user_pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_UUID_fkey" FOREIGN KEY ("user_UUID") REFERENCES "User"("user_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_product_UUID_fkey" FOREIGN KEY ("product_UUID") REFERENCES "Products"("product_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
