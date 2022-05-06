import database from "../database";
import { v4 as uuid } from "uuid";

const createProductService = async (name, price, category_id) => {
  const id = uuid();
  try {
    const res = await database.query(
      "INSERT INTO products (id, name, price, category_id) VALUES($1, $2, $3, $4) RETURNING *",
      [id, name, Number(price), Number(category_id)]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createProductService;
