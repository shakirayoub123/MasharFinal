const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "Alumni" },
    name: String,
    initials: String
  },
  title: String,
  body: String,
  category: String,
  likes: { type: Number, default: 0 },

  comments: [
    {
      body: String,
      author: {
        id: { type: mongoose.Schema.Types.ObjectId, ref: "Alumni" },
        name: String
      },
      createdAt: { type: Date, default: Date.now }
    }
  ],

  featured: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
