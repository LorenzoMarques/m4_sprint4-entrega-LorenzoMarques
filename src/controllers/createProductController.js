import createProductService from "../services/createProductService";

const createProductController = async (req, res) => {
  const { name, price, category_id } = req.body;

  try {
    if (name && price && category_id) {
      const product = await createProductService(name, price, category_id);

      return res.status(201).json({
        message: "product created",
        product: product,
      });
    } else {
      return res.status(400).json({ message: "Bad request" });
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createProductController;
