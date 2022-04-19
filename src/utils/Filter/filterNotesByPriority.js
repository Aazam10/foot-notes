const filterNotesByPriority = (notes, priority) => {
  if (priority === "LOW") {
    return notes.filter((note) => note.priority === "Low");
  } else if (priority === "MEDIUM") {
    return notes.filter((note) => note.priority === "Medium");
  } else if (priority === "HIGH") {
    return notes.filter((note) => note.priority === "High");
  }
  return notes;
};

export { filterNotesByPriority };
