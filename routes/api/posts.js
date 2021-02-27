const express = require("express");
const router = express.Router();

//posts Model

const Posts = require("../../models/posts");

router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong while saveing the post");
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
