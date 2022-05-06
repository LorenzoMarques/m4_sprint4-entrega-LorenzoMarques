import getProductByCategory from "../services/getProductByCategoryService";
const getProductByCategoryController = async (request, response) => {
  const { category_id } = request.params;

  try {
    if (category_id) {
      const products = await getProductByCategory(category_id);
      if (!products[0]) {
        return response.status(400).json({ message: "Product not found" });
      } else {
        return response.status(200).json(products);
      }
    } else {
      return response.status(400).json({ message: "Id is required" });
    }
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default getProductByCategoryController;
