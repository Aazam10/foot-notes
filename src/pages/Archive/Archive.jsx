import { Navbar, Sidebar, NoteCard } from "../../components";
import { useNotes } from "../../context";

const Archive = () => {
  const {
    noteState: { archives },
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
        </div>
      </main>
    </div>
  );
};

export { Archive };
