import getProductByIdService from "../services/getProductByIdService";

const getProductByIdController = async (request, response) => {
  const { id } = request.params;

  try {
    if (id) {
      const category = await getProductByIdService(id);

      return response.status(200).json(category);
    } else {
      return response.status(400).json({ message: "id is required" });
    }
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default getProductByIdController;
