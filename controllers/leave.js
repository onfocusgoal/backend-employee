const { Leave } = require("../models/Leave");

exports.createLeave = async (req, res, next) => {
	try {
		const leave = await Leave.create({ ...req.body.item });
		res.status(200).json({ success: true, leave });
	} catch (error) {
		next(error);
	}
};
