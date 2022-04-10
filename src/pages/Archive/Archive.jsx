import { Navbar, Sidebar, NoteCard, NoteForm } from "../../components";
import { useNotes } from "../../context";

const Archive = () => {
  const {
    noteState: { archives },
    showNoteForm,
  } = useNotes();
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Sidebar />
        <div className="notes-main-container">
          <div className="notes-card-container">
            {archives.length > 0
              ? archives.map((archivedNote) => {
                  return (
                    <NoteCard note={archivedNote} key={archivedNote._id} />
                  );
                })
              : null}
          </div>
          {showNoteForm && <NoteForm />}
        </div>
      </main>
    </div>
  );
};

export { Archive };
