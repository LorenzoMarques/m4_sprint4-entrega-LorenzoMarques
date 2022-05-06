import deleteCategoryService from "../services/deleteCategoryService";

const deleteCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    if (id) {
      const deletedCategory = await deleteCategoryService(id);

      return response.status(200).json({
        message: "Category deleted",
        category: deletedCategory,
      });
    }
  } catch (err) {
    return response.status(400).json(err);
  }
};

export default deleteCategoryController;
