import updateCategoryService from "../services/updateCategoryService";

const updateCategoryController = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  try {
    if (id && name) {
      const updatedCategory = await updateCategoryService(name, id);
      return response.status(200).json({
        message: "Category updated",
        category: updatedCategory,
      });
    } else {
      return response.status(400).json({ message: "id or name missing" });
    }
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default updateCategoryController;
