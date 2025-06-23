import express from "express";
import {
  login,
  logout,
  onboard,
  signup,
  uploadPhoto,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { uploadProfile } from "../lib/cloudinaryProfile.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard);

// check if user is logged in
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});
router.route("/uploadprofile").post(protectRoute, uploadProfile, uploadPhoto);
export default router;
