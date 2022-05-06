import updateProductService from "../services/updateProductService";
import database from "../database";

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const res = await database.query("SELECT * FROM products WHERE id = ($1)", [
    id,
  ]);
  const {
    name = res.rows[0].name,
    price = res.rows[0].price,
    category_id = res.rows[0].category_id,
  } = request.body;

  try {
    if (id && name) {
      const updatedCategory = await updateProductService(
        name,
        price,
        category_id,
        id
      );
      return response.status(200).json({
        message: "Category updated",
        product: updatedCategory,
      });
    } else {
      return response.status(400).json({ message: "Bad Request" });
    }
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default updateProductController;
