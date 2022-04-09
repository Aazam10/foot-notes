import "./NoteCard.css";
import { FaArchive, FaTrashAlt } from "react-icons/fa";
import {
  MdColorLens,
  MdRestoreFromTrash,
  MdDeleteForever,
} from "react-icons/md";
import { useAuth, useNotes } from "../../context";

import {
  addToTrashFn,
  restoreFromTrashFn,
  deleteFromTrashFn,
} from "../../utils";

const NoteCard = ({ note }) => {
  const {
    authState: { token },
  } = useAuth();

  const {
    noteState: { notes, trash },
    noteDispatch,
  } = useNotes();

  const addToTrashHandler = (id) => {
    addToTrashFn(id, token, note, noteDispatch);
  };
  const restoreFromTrashClickHandler = (id) => {
    restoreFromTrashFn(id, token, note, noteDispatch);
  };
  const deleteForeverClickHandler = (id) => {
    deleteFromTrashFn(id, token, noteDispatch);
  };

  const isInTrash = trash.find((trashedNote) => trashedNote._id === note._id);

  return (
    <section className="note-card">
      <h2 className="note-title">{note.title}</h2>
      <p className="note-description">{note.content}</p>
      <div className="note-card-footer">
        <p>{note.createdDate}</p>
        {isInTrash ? (
          <div className="note-icons-container">
            <MdRestoreFromTrash
              className="icon"
              onClick={() => restoreFromTrashClickHandler(note._id)}
            />
            <MdDeleteForever
              className="icon"
              onClick={() => deleteForeverClickHandler(note._id)}
            />
          </div>
        ) : (
          <div className="note-icons-container">
            <MdColorLens className="icon" />
            <FaArchive className="icon" />
            <FaTrashAlt
              className="icon"
              onClick={() => addToTrashHandler(note._id)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export { NoteCard };
