const { createLeave } = require("../controllers/leave");

const router = require("express").Router();

router.route("/leave").post(createLeave);

module.exports = router