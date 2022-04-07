import "./NoteCard.css";
import { FaArchive, FaTrashAlt } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";

const NoteCard = ({ note }) => {
  return (
    <section className="note-card">
      <h2 className="note-title">{note.title}</h2>
      <p className="note-description">{note.content}</p>
      <div className="note-card-footer">
        <p>date</p>
        <div className="note-icons-container">
          <MdColorLens className="icon" />
          <FaArchive className="icon" />
          <FaTrashAlt className="icon" />
        </div>
      </div>
    </section>
  );
};

export { NoteCard };
