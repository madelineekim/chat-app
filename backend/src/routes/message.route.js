import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getUsersforSidebar, getMessages, sendMessage } from "../controllers/message.controller";

const router = express.Router();

router.get("/users", protectRoute, getUsersforSidebar);

router.get("/:id", protectRoute, getMessages);

router.post("/send", protectRoute, sendMessage);

export default router;

