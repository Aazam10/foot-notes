import { useNotes } from "../../context";
import { NoteCard } from "../NoteCard/NoteCard";
const NoteList = () => {
  const { noteState } = useNotes();
  const { notes } = noteState;

  return (
    <div className="notes-card-container">
      {notes.map((note) => {
        return <NoteCard note={note} />;
      })}
    </div>
  );
};

export { NoteList };
