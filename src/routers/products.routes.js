import { Router } from "express";
import createProductController from "../controllers/createProductController";
import deleteProductController from "../controllers/deleteProductController";
import getProductByCategoryController from "../controllers/getProductByCategoryController";
import getProductByIdController from "../controllers/getProductByIdController";
import getProductsController from "../controllers/getProductsControlle";
import updateProductController from "../controllers/updateProductController";
import verifyProductId from "../middlewares/verifyProductId";

const router = Router();

router.post("", createProductController);
router.get("", getProductsController);
router.get("/:id", verifyProductId, getProductByIdController);
router.get("/category/:category_id", getProductByCategoryController);
router.patch("/:id", verifyProductId, updateProductController);
router.delete("/:id", verifyProductId, deleteProductController);

export default router;
