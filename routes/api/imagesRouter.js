import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
// prettier-ignore
import {getAllImages} from '../../controllers/imagesController.js';
import { ValidateApiKey } from '../../middlewares/validationMiddleware.js';

const router = express.Router();

     
router.get("/getImages", ValidateApiKey, ctrlWrapper(getAllImages));            


export { router };
