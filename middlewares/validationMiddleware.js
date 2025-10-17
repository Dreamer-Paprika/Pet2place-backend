import { httpError } from "../helpers/httpError.js";
import "dotenv/config";
const { ACCESS_TOKEN } = process.env;
import TheAuthAPI from "theauthapi";
const theAuthAPI = new TheAuthAPI(ACCESS_TOKEN);

const ValidateApiKey = async (req, _res, next) => {
  const { "x-api-key": myApiKey } = req.headers;

  try {
    const isValidKey = await theAuthAPI.apiKeys.isValidKey(myApiKey);
    if (!isValidKey) {
     throw httpError(401);
    }
    else {
      console.log("API Key is valid");
    }
    next();
  } catch (error) {
    next(error);
  }
};

export { ValidateApiKey };
