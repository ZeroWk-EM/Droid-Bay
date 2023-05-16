import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./configs/db.connection.config.ts";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.get("/", (_, res) => {
  res
    .status(200)
    .json({ status: 200, message: "Server started", endpoint: ["/v1/droids"] });
});

import droidRoutes from "./routes/droid.routes.js";

app.use("/v1/droids", droidRoutes);

app.listen(PORT, () => {
  console.log(`Server started to ${PORT} port`);
  connectToMongoDB();
});
