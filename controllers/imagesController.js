import { Image } from "../models/imageModel.js";
// prettier-ignore
import { httpError } from "../helpers/httpError.js";


const getAllImages = async (req, res) => {
  const images = await Image.find();
  res.json(images);

};




// prettier-ignore
export { getAllImages};                                        