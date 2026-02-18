const router = require("express").Router();
const Post = require("../models/Post");
const protect = require("../middleware/auth");

// CREATE POST
router.post("/", protect, async (req, res) => {
  const { title, body, category } = req.body;

  const post = await Post.create({
    title,
    body,
    category,
    author: {
      id: req.alumni._id,
      name: req.alumni.name,
      initials: req.alumni.name.charAt(0)
    }
  });

  res.json(post);
});

// GET POSTS
router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// LIKE POST
router.put("/like/:id", protect, async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  await post.save();
  res.json(post);
});

module.exports = router;
