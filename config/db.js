const mongoose = require("mongoose");
// const pusher = require("../config/pusher");

exports.connectionDatabase = async () => {
	await mongoose
		.connect(process.env.mongo_uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("Database connected"));
};
