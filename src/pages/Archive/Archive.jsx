import { NoteCard, NoteForm } from "../../components";
import { useNotes } from "../../context";

const Archive = () => {
  const {
    noteState: { archives },
    showNoteForm,
    toggle,
  } = useNotes();
  return (
    <div
      className={`notes-main-container ${
        toggle ? "notes-container-toggle-open" : null
      }`}
    >
      <div className="notes-card-container">
        {archives.length > 0
          ? archives.map((archivedNote) => {
              return <NoteCard note={archivedNote} key={archivedNote._id} />;
            })
          : null}
      </div>
      {showNoteForm && <NoteForm />}
    </div>
  );
};

export { Archive };
