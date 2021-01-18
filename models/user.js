const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
		type: String,
		unique: true,
		index: true,
		},
    role: {
      type: String,
      default: "admin",
		},
		password: {
			type: String,
			require: true
		}
	}
);

module.exports = mongoose.model("User", userSchema);
