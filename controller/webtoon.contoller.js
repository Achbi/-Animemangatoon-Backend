import Webtoon from "../models/webtoons.model.js";
import generatetoken from "../jwt/generatetoken.js";

export const Add = async (req, res) => {
  try {
    const { title, description, characters } = req.body;

    // Check if the webtoon with the same title already exists
    const titleFind = await Webtoon.findOne({ title });
    if (titleFind) {
      return res.status(400).json({ error: "Title already exists" });
    }

    // Create a new webtoon entry
    const newWebtoon = new Webtoon({
      title,
      description,
      characters,
    });

    // Save the new webtoon to the database
    const savedWebtoon = await newWebtoon.save();

    // Return the saved webtoon
    res.json(savedWebtoon);
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error saving webtoon:", error);
    res.status(500).json({ error: "Server error. Failed to save the webtoon." });
  }
};
 


  export const getwebtoonbyid = async (req, res) => {
    try {
      const webtoon = await Webtoon.findById(req.params.id);
      if (!webtoon) return res.status(404).json({ msg: "Webtoon not found" });
      res.json(webtoon);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  };

  export const getallwebtoon = async(req,res) =>{
    try{
        const webtoons = await Webtoon.find({});
        res.json(webtoons);
    }catch(e){
        res.status(500).send("Server Error");
    }
  }

  export const deletewebtoon = async (req, res) => {
    try {
      const webtoon = await Webtoon.findById(req.params.id);
      
      if (!webtoon) {
        return res.status(404).json({ msg: "Webtoon not found" });
      }
      
      await webtoon.deleteOne();
      
      res.json({ msg: "Webtoon deleted" });
    } catch (error) {
      console.error("Error deleting webtoon:", error);
      res.status(500).json({ error: "Server Error" });
    }
  };