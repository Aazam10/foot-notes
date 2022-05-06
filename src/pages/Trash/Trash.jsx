import { useNotes } from "../../context";
import { NoteCard } from "../../components";

const Trash = () => {
  const {
    noteState: { trash },
    toggle,
  } = useNotes();
  return (
    <div
      className={`notes-main-container ${
        toggle ? "notes-container-toggle-open" : null
      }`}
    >
      <div className="notes-card-container">
        {trash.map((trashedNote) => {
          return <NoteCard note={trashedNote} key={trashedNote._id} />;
        })}
      </div>
    </div>
  );
};

export { Trash };
