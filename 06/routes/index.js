import express from "express";
import bookRoutes from "./books.js";

const router = express.Router();

router.use("/books", bookRoutes);

export default router;
