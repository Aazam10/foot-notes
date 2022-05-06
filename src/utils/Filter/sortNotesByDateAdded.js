const sortNotesByDateAdded = (notes, dateAdded) => {
  if (dateAdded === "") {
    return notes;
  } else {
    if (dateAdded === "OLDEST_FIRST") {
      return [...notes].sort(
        (a, b) => Date.parse(a.createdDate) - Date.parse(b.createdDate)
      );
    } else if (dateAdded === "NEWEST_FIRST") {
      return [...notes].sort(
        (a, b) => Date.parse(b.createdDate) - Date.parse(a.createdDate)
      );
    }
  }
};

export { sortNotesByDateAdded };
