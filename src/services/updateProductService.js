import database from "../database";

const updateProductService = async (name, price, category_id, id) => {
  if (name.split(" ").length > 1) {
    name = name.split(" ")[0];
  }
  try {
    const res = await database.query(
      "UPDATE products SET name = ($1), price = ($2), category_id = ($3) WHERE id = ($4) RETURNING *",
      [name + " " + "(Atualizado)", price, category_id, id]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;
