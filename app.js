require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const { connectionDatabase } = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// database
connectionDatabase();

app.get("/", (req, res) => {
	res.send("Everything is fine");
});

app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/leave"));

app.use(errorHandler);
const port = 3000;
app.listen(port, () => console.log(`server running on port ${port}`));
