import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);

 router.post("/", createNote);

 router.put("/:id", updateNote);

 router.delete("/:id", deleteNote);


// app.get("/api/notes", (req, res) => {
//   //Send notes
//   res.status(200).send("you got 5 notes")
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({message: "post created successifully"})
// })

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).json({message: "post updated successifully"})
// })

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(200).json({message: "post deleted successifully"})
// })



export default router;