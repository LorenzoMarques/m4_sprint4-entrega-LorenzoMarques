import deleteProductService from "../services/deleteProductService";

const deleteProductController = async (request, response) => {
  const { id } = request.params;

  try {
    if (id) {
      const deletedProduct = await deleteProductService(id);
      return response.status(200).json({
        message: "Product deleted",
        product: deletedProduct,
      });
    }
  } catch (err) {
    return response.status(400).json(err);
  }
};

export default deleteProductController;
