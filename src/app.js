import express from "express";
import cors from "cors";

import contactsRouter from "./routes/contact.route.js"

import { notFound, errorHandler } from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json());
app.use(cors());

// API
app.get("/", (request, response) => {
    response.status(200).json({message: "Welcome to contact book application"})
})

app.use("/api/contacts", contactsRouter);

app.use(notFound);
app.use(errorHandler);

export default app;