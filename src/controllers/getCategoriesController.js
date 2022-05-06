import getCategoriesService from "../services/getCategoriesService";

const getCategoriesController = async (req, res) => {
  try {
    const categories = await getCategoriesService();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export default getCategoriesController;
