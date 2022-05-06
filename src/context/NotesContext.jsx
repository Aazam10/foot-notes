import { useState, createContext, useContext, useReducer } from "react";
import { noteInitialState, noteReducer } from "../reducer";

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, noteInitialState);
  const [showNoteForm, setShowNoteForm] = useState(false);

  const inputInitialState = {
    title: "",
    content: "",
    bgcolor: "",
    priority: "",
    tags: [],
  };

  const [noteDetails, setNoteDetails] = useState(inputInitialState);
  const [isEditing, setIsEditing] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <NotesContext.Provider
      value={{
        noteState,
        noteDispatch,
        showNoteForm,
        setShowNoteForm,
        noteDetails,
        setNoteDetails,
        inputInitialState,
        isEditing,
        setIsEditing,
        toggle,
        setToggle,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
