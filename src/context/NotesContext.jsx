import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { noteInitialState, noteReducer } from "../reducer";

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, noteInitialState);
  const [showNoteForm, setShowNoteForm] = useState(false);

  return (
    <NotesContext.Provider
      value={{ noteState, noteDispatch, showNoteForm, setShowNoteForm }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
