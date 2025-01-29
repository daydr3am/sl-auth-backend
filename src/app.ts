import express from "express";
import { authRoutes } from "./routes/AuthRoutes"

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use("/auth", authRoutes)

app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT)
})