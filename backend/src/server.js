import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
}

app.use(express.json()); // This middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// Our custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
//   next();
// })

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  
  app.use(express.static(path.join(__dirname,"../frontend/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html",));
  });
}

// What is an Enpoint?
// An endpoint is a combination of URL + HTTP method that lets the client interact with a specific rescources

// http://localhost:5001/api/notes/21445

await connectDB();

app.listen(PORT, () => {
  console.log("server started on port:", PORT);
});
