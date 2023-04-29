const express = require("express");
const {
	register,
	login,
	refreshToken,
	checkIn,
	checkOut,
	getUsers,
} = require("../controllers/auth");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/checkin").patch(checkIn);
router.route("/checkout").patch(checkOut);

router.route("/users").get(getUsers);

router.route("/refresh").get(protect, refreshToken);

module.exports = router;
