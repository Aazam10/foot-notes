import "./NoteCard.css";
import { FaTrashAlt } from "react-icons/fa";
import {
  MdColorLens,
  MdRestoreFromTrash,
  MdDeleteForever,
  MdArchive,
  MdUnarchive,
  MdEdit,
  MdBarChart,
} from "react-icons/md";
import { useAuth, useNotes } from "../../context";
import { ColorPallete } from "../ColoPallete/ColorPallete";
import { Priority } from "../Priority/Priority";
import {
  addToTrashFn,
  restoreFromTrashFn,
  deleteFromTrashFn,
  addToArchiveFn,
  restoreArchiveFn,
  addToTrashFromArchiveFn,
  editNoteFn,
  editArchiveNoteFn,
} from "../../utils";
import { useState } from "react";

const NoteCard = ({ note }) => {
  const {
    authState: { token },
  } = useAuth();

  const {
    noteState: { trash, archives },
    noteDispatch,
    setNoteDetails,
    setShowNoteForm,
    setIsEditing,
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

  const [showColorPallete, setShowColorPallete] = useState(false);
  const [showPriority, setShowPriority] = useState(false);

  const updateNoteHandler = async (currentNote) => {
    isInArchive
      ? editArchiveNoteFn(currentNote, token, noteDispatch)
      : editNoteFn(currentNote, token, noteDispatch);
  };

  const editIconClickHandler = () => {
    setNoteDetails({ ...note });
    setIsEditing(true);
    setShowNoteForm(true);
  };

  const priorityIconClickHandler = () => {
    setShowColorPallete(false);
    setShowPriority((prev) => !prev);
  };
  const colorPalleteIconClickHandler = () => {
    setShowColorPallete((prev) => !prev);
    setShowPriority(false);
  };

  return (
    <section className="note-card" style={{ backgroundColor: note.bgcolor }}>
      {note.priority !== "" ? (
        <div className="priority-tag">{note.priority}</div>
      ) : null}
      <h2 className="note-title">{note.title}</h2>
      <p className="note-description">{note.content}</p>
      <div className="added-tags notecard-tags">
        {note.tags.map((tag) => (
          <h3 key={tag} className="note-tag">
            {tag}
          </h3>
        ))}
      </div>
      <div className="note-card-footer">
        <p className="note-date">{note.createdDate}</p>
        <div className="icon-wrapper">
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
              <MdEdit
                className="icon"
                onClick={() => editIconClickHandler(note._id)}
              />
              <MdBarChart className="icon" onClick={priorityIconClickHandler} />
              <MdColorLens
                className="icon"
                onClick={colorPalleteIconClickHandler}
              />
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
              <MdEdit className="icon" onClick={editIconClickHandler} />
              <MdBarChart className="icon" onClick={priorityIconClickHandler} />
              <MdColorLens
                className="icon"
                onClick={colorPalleteIconClickHandler}
              />
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
      </div>
      {showColorPallete && (
        <ColorPallete
          note={note}
          updateNoteHandler={updateNoteHandler}
          setShowColorPallete={setShowColorPallete}
        />
      )}
      {showPriority && (
        <Priority
          note={note}
          updateNoteHandler={updateNoteHandler}
          setShowPriority={setShowPriority}
        />
      )}
    </section>
  );
};

export { NoteCard };
