const { Schema } = require("mongoose");

const WatchlistItemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  percent: { type: String, required: true },
  isDown: { type: Boolean, default: false },
});

const WatchlistSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  items: [WatchlistItemSchema],
});

module.exports = { WatchlistSchema }; 