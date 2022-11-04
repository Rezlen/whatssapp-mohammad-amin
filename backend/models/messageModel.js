const mongoose = require("mongoose");

const messageSchema = mongoose.Schema( // This function retrieve the content of the messages
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // its TYPE actually shows the path to access the ID of the user AND reference it to the USER.
    content: { type: String, trim: true }, // trim, removes the space after or before the names
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
