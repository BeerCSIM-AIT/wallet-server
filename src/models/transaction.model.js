const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('../models/user.model')

const operations = ['topup', 'withdrawn', 'buy']

const transactionSchema = new Schema({
  operation: { type: String, required: true, enum: operations },
  accountNumber: { type: Number, ref: User, required: true },
  destinationAccountNumber: { type: Number, ref: User },
  amount: { type: Number, default: 0, required: true },
  reference: { type: String },
}, { timestamps: true });
