import database from "../database";

const getProductByIdService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products", []);
    const products = res.rows;
    const findProduct = products.find((product) => product.id === id);
    if (findProduct) {
      return findProduct;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default getProductByIdService;
