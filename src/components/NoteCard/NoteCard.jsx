import "./NoteCard.css";
import { FaArchive, FaTrashAlt } from "react-icons/fa";
import {
  MdColorLens,
  MdRestoreFromTrash,
  MdDeleteForever,
  MdArchive,
  MdUnarchive,
} from "react-icons/md";
import { useAuth, useNotes } from "../../context";

import {
  addToTrashFn,
  restoreFromTrashFn,
  deleteFromTrashFn,
  addToArchiveFn,
  restoreArchiveFn,
  addToTrashFromArchiveFn,
} from "../../utils";

const NoteCard = ({ note }) => {
  const {
    authState: { token },
  } = useAuth();

  const {
    noteState: { notes, trash, archives },
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

  const addToArchiveClickHandler = (id) => {
    addToArchiveFn(id, token, note, noteDispatch);
  };

  const restoreFromArchiveClickHandler = (id) => {
    restoreArchiveFn(id, token, note, noteDispatch);
  };

  const addToTrashFromArchiveHandler = async (id) => {
    addToTrashFromArchiveFn(id, token, note, noteDispatch);
  };

  const isInTrash = trash.find((trashedNote) => trashedNote._id === note._id);
  const isInArchive = archives.find(
    (archivedNote) => archivedNote._id === note._id
  );

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
        ) : isInArchive ? (
          <div className="note-icons-container">
            <MdColorLens className="icon" />
            <MdUnarchive
              className="icon"
              onClick={() => restoreFromArchiveClickHandler(note._id)}
            />
            <FaTrashAlt
              className="icon"
              onClick={() => addToTrashFromArchiveHandler(note._id)}
            />
          </div>
        ) : (
          <div className="note-icons-container">
            <MdColorLens className="icon" />
            <MdArchive
              className="icon"
              onClick={() => addToArchiveClickHandler(note._id)}
            />
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
