const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: String,
    subject: {
      type: Schema.Types.ObjectId,
      ref: "Post"
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
