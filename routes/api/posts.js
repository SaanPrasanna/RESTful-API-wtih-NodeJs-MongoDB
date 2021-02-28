const express = require("express");
const posts = require("../../models/posts");
const router = express.Router();

//posts Model

const Posts = require("../../models/posts");
//GET
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!Posts) throw Error("No Item");
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//GET BY :id
router.get("/:id", async (req, res) => {
  try {
    const posts = await Posts.findById(req.params.id);
    if (!Posts) throw Error("No Item");
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//POST
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong while saveing the post");
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error("Record not Found!");
    res.status(200).json({ success: 1 });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//PATCH
router.patch("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error("Record not Found!");
    res.status(200).json({ success: 1 });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

module.exports = router;
