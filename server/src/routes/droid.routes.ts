import express from "express";
import Droid from "../models/droid.model";
const router = express.Router();
router.use(express.json());

router.get("/", async ({ query }, res) => {
  const findAll = await Droid.find(query);
  if (findAll) return res.status(200).json(findAll);
  return res.status(400).json({ message: "Error to print all Droid" });
});

export default router;
