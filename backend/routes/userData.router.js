import express from "express";
import { add, getAllData } from "../controllers/userDataController.js";
const router = express.Router();

// [CREATE] new userData
router.post("/", add);
// [READ] user data
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `Getting user data with id: ${id}` });
});
// [UPDATE] the data in user data
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `Updated user data with id: ${id}` });
});
// [DELETE] a users data
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `Deleting user data with id: ${id}` });
});
// * [READ] ALL of the user data
router.get("/", getAllData);

export default router;
