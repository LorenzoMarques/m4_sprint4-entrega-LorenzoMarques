import database from "../database";

const getProductByCategory = async (category_id) => {
  try {
    const res = await database.query(
      "SELECT products.id,products.name,products.price,products.category_id,categories.id AS categories_id,categories.name AS categories_name FROM products INNER JOIN categories ON products.category_id = categories.id WHERE products.category_id = ($1)",
      [category_id]
    );
    const products = res.rows.map((element) => {
      return {
        products: {
          id: element.id,
          name: element.name,
          price: element.price,
          category_id: element.category_id,
        },
        category: {
          id: element.categories_id,
          name: element.categories_name,
        },
      };
    });
    if (products) {
      return products;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default getProductByCategory;
