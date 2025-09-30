const mongoose = require("mongoose");

  // Optional: make Mongoose error messages clearer
  mongoose.set("runValidators", true);

  const LoginSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 24,
        match: /^[a-zA-Z0-9_]+$/,
        unique: true,
        index: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        index: true,
      },
      password: {
        type: String,
        required: true,
      },
      termsAccepted: {
        type: Boolean,
        default: false,
      },
      resetPasswordToken: {
        type: String,
        index: true,
      },
      resetPasswordExpires: {
        type: Date,
      },
    },
    { timestamps: true }
  );

  const User = mongoose.model("users", LoginSchema);

  module.exports = { User, mongoose };