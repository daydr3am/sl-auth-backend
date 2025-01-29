import { Router } from "express"
import { authenticateUser } from "../controllers/AuthController"

export const authRoutes = Router()

authRoutes.post("/", authenticateUser)