import { Schema, model } from "mongoose";

const imageSchema = new Schema(
  {
    link: {
      type: String
    }
  },
  { versionKey: false }
);

const Image = model("image-link", imageSchema);

export { Image };
