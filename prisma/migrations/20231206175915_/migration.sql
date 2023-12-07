-- RenameForeignKey
ALTER TABLE "Order" RENAME CONSTRAINT "Order_product_UUID_fkey" TO "belong_Products";

-- RenameForeignKey
ALTER TABLE "Order" RENAME CONSTRAINT "Order_user_UUID_fkey" TO "is_ordered_by";
