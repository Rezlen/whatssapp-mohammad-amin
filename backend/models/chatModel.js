const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true }, // trim, removes the space after or before the names
    isGroupChat: { type: Boolean, default: false }, // the TYPE is boolean because either group chat or not.
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // its TYPE actually shows the path to access the ID of the user AND reference it to the USER.
    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message" }, // its TYPE actually shows the path to access the ID of the user AND reference it to the LatestMESSAGE.
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // its TYPE actually shows the path to access the ID of the user AND reference it to the USER as the admin of the chat.
  },
  { timestamps: true } // adds time for everychat
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;



