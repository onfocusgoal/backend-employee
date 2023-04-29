const { Schema, model } = require("mongoose");

const leaveSchema = Schema({
	date: { type: Date },
	message: { type: String },
	leaveType: { type: String },
});

exports.Leave = model("Leave", leaveSchema);
