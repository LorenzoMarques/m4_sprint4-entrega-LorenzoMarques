import getProductsService from "../services/getProductsService";
const getProductsController = async (req, res) => {
  try {
    const categories = await getProductsService();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export default getProductsController;
