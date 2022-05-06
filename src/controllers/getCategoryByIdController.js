import getCategoryByIdService from "../services/getCategoryByIdService";

const getCategoryByIdController = async (request, response) => {
  const { id } = request.params;

  try {
    if (id) {
      const category = await getCategoryByIdService(id);
      if (category) {
        return response.status(200).json(category);
      } else {
        return response.status(400).json({ message: "Category not found" });
      }
    } else {
      return response.status(400).json({ message: "id is required" });
    }
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default getCategoryByIdController;
