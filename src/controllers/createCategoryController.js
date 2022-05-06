import createCategoryService from "../services/createCategoryService";

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  try {
    if (name) {
      const category = await createCategoryService(name);

      return res.status(201).json({
        message: "Category created",
        category: category,
      });
    } else {
      return res.status(400).json({ message: "name required" });
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createCategoryController;
