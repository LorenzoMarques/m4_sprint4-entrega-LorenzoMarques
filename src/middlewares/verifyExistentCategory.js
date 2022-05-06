import database from "../database";

const verifyExistentCategory = async (request, response, next) => {
  const { name } = request.body;

  try {
    const res = await database.query("SELECT * FROM categories", []);
    const categories = res.rows;
    const findCategory = categories.find((category) => category.name === name);
    if (findCategory) {
      return response
        .status(400)
        .json({ message: "This category already exist" });
    }
  } catch (err) {
    console.log("passou aqui");
    throw new Error(err);
  }
  next();
};

export default verifyExistentCategory;
