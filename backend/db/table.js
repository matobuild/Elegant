const pool = require("../db/pool")

async function createTable(sql) {
  try {
    let response = await pool.query(sql)
    // console.log("THE RESPONSE IS --->", response)
    // console.log("table created successfully")
  } catch (err) {
    console.log("error creating table---->", err)
  }
}

const userTableSql = `
  CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    user_password VARCHAR(255),
    roles VARCHAR(255)
  );`

const cartsTableSql = `CREATE TABLE IF NOT EXISTS carts(
  cart_id SERIAL PRIMARY KEY,
  type VARCHAR(255),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);`

const ordersTableSql = `CREATE TABLE IF NOT EXISTS orders(
  order_id SERIAL PRIMARY KEY,
  total_price NUMERIC(10, 2),
  status VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);`

const orders_paymentTableSql = `CREATE TABLE IF NOT EXISTS orders_payment(
  order_payment_id SERIAL PRIMARY KEY,
  payment_method VARCHAR(255),
  transaction_id VARCHAR(255),
  amount NUMERIC(10, 2),
  bank_number VARCHAR(255),
  method_type VARCHAR(255),
  payment_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  order_id INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
);`

const shippingTableSql = `CREATE TABLE IF NOT EXISTS shipping(
  shipping_id SERIAL PRIMARY KEY,
  address VARCHAR(255),
  city VARCHAR(255),
  zip_code VARCHAR(255),
  country VARCHAR(255),
  shipping_method VARCHAR(255),
  order_id INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
);`

const categoriesTableSql = `CREATE TABLE IF NOT EXISTS categories(
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);`

const productsTableSql = `CREATE TABLE IF NOT EXISTS products(
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  price NUMERIC(10, 2),
  image_url VARCHAR(255),
  stock VARCHAR(255),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);`

const reviewsTableSql = `CREATE TABLE IF NOT EXISTS reviews(
  review_id SERIAL PRIMARY KEY,
  review VARCHAR(255),
  rating INT,
  product_id INT,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);`

const cartItemsTableSql = `CREATE TABLE IF NOT EXISTS cartItems(
  cartItem_id SERIAL PRIMARY KEY,
  quantity INT,
  cart_id INT,
  FOREIGN KEY (cart_id) REFERENCES carts(cart_id),
  product_id INT,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
  );`

const order_ItemsTableSql = `CREATE TABLE IF NOT EXISTS order_items(
  order_item_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  quantity INT,
  price NUMERIC(10, 2),
  description VARCHAR(255),
  image_url VARCHAR(255),
  order_id INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  product_id INT,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);`

async function initializeTable() {
  await createTable(userTableSql)
  await createTable(cartsTableSql)
  await createTable(ordersTableSql)
  await createTable(orders_paymentTableSql)
  await createTable(shippingTableSql)
  await createTable(categoriesTableSql)
  await createTable(productsTableSql)
  await createTable(reviewsTableSql)
  await createTable(cartItemsTableSql)
  await createTable(order_ItemsTableSql)
}

module.exports = { initializeTable }
