const { Schema } = require("mongoose");

const FundsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  availableMargin: { type: Number, default: 0 },
  usedMargin: { type: Number, default: 0 },
  availableCash: { type: Number, default: 0 },
  openingBalance: { type: Number, default: 0 },
  payin: { type: Number, default: 0 },
  span: { type: Number, default: 0 },
  deliveryMargin: { type: Number, default: 0 },
  exposure: { type: Number, default: 0 },
  optionsPremium: { type: Number, default: 0 },
  collateralLiquidFunds: { type: Number, default: 0 },
  collateralEquity: { type: Number, default: 0 },
  totalCollateral: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = { FundsSchema }; 