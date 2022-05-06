import { Router } from "express";
import createCategoryController from "../controllers/createCategoryController";
import deleteCategoryController from "../controllers/deleteCategoryController";
import getCategoriesController from "../controllers/getCategoriesController";
import getCategoryByIdController from "../controllers/getCategoryByIdController";
import updateCategoryController from "../controllers/updateCategoryController";
import verifyCategoryId from "../middlewares/verifyCategoryId";
import verifyExistentCategory from "../middlewares/verifyExistentCategory";

const router = Router();

router.post("", verifyExistentCategory, createCategoryController);
router.get("", getCategoriesController);
router.get("/:id", getCategoryByIdController);
router.patch("/:id", verifyCategoryId, updateCategoryController);
router.delete("/:id", verifyCategoryId, deleteCategoryController);

export default router;
