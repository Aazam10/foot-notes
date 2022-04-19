import { useFilter, useNotes } from "../../context";
import { NoteCard } from "../NoteCard/NoteCard";
import { filterNotesByPriority, sortNotesByDateAdded } from "../../utils";

const NoteList = () => {
  const { noteState } = useNotes();
  const { notes } = noteState;

  const {
    filterState: { dateAdded, priority },
  } = useFilter();

  const filteredPriorityNotes = filterNotesByPriority(notes, priority);
  const finalNotes = sortNotesByDateAdded(filteredPriorityNotes, dateAdded);

  return (
    <div className="notes-card-container">
      {finalNotes.map((note) => {
        return <NoteCard note={note} key={note._id} />;
      })}
    </div>
  );
};

export { NoteList };
