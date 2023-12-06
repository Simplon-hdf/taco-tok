# Management Rules for E-Commerce API

## Users
1. Each user must have a unique `UUID`.
2. The `pseudo` must be unique and not exceed 20 characters.
3. The `username` should not exceed 30 characters.
4. The `password` must be stored securely with a length of 72 characters.
5. Authentication is required to place an order.

## Products
1. Each product must have a unique `UUID`.
2. The `name` of the product should not exceed 20 characters.
3. The `description` can be up to 500 characters long.
4. The `unit price` should be a floating-point number.
5. The `quantity` should be an integer greater than or equal to 1.
6. The `addition` and `update` dates must be recorded.

## Orders
1. Each order is assigned a unique, auto-incremented number.
2. The order must contain the `UUIDs` of the client and the product.
3. The `product quantity` ordered should be an integer greater than or equal to 1.
4. The `total price` is calculated excluding tax.
5. The `creation` and `shipping` dates are recorded at the time of order placement and shipment, respectively.

## Order Process
1. An order can only be placed by an authenticated user.
2. When a product is ordered, the available quantity must be updated.
3. An order can only be shipped if the product is in stock.

## Security
1. The API must use HTTPS for all transactions.
2. Sensitive data such as passwords must be encrypted.
