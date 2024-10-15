// models/Webtoon.js
import mongoose from "mongoose";

const webtoonschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  characters: [
    {
      name: String,
      description: String,
    },
  ],
});

const Webtoon = mongoose.model("webtoon",webtoonschema);
export default Webtoon;
