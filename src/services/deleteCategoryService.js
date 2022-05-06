import database from "../database";

const deleteCategoryService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = ($1) RETURNING *",
      [id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategoryService;
