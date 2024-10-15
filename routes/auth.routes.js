import express from "express";
import { SignUP } from "../controller/auth.controller.js";
import { loginUser } from "../controller/auth.controller.js";
import { logoutUser } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup",SignUP );
router.post("/login",loginUser);

router.post("/logout",logoutUser);

export default router;