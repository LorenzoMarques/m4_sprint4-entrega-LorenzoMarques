import database from "../database";

const getCategoryByIdService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM categories", []);
    const categories = res.rows;
    const findCategory = categories.find((category) => category.id === id);
    if (findCategory) {
      return findCategory;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default getCategoryByIdService;
