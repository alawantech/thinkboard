import mongoose from "mongoose";

// 1- Create a schema
// 2- model based off of the schema

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

},
{timestamps: true}

)
const Note = mongoose.model("Note", noteSchema);

export default Note;