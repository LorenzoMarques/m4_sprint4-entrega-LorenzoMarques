import database from "../database";

const verifyCategoryId = async (request, response, next) => {
  const { id } = request.params;

  try {
    const res = await database.query("SELECT * FROM categories", []);
    const categories = res.rows;
    const findCategory = categories.find((category) => category.id === id);
    if (!findCategory) {
      return response.status(400).json({ message: "Invalid ID" });
    }
  } catch (err) {
    throw new Error(err);
  }
  next();
};

export default verifyCategoryId;
