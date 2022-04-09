const noteInitialState = { notes: [], trash: [], archives: [] };

const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: action.payload };
    case "ADD_TO_TRASH":
      return {
        ...state,
        notes: action.payload.notes,
        trash: action.payload.trash,
      };
    case "RESTORE_FROM_TRASH":
      return {
        ...state,
        notes: action.payload.notes,
        trash: action.payload.trash,
      };

    case "PERMANENT_DELETE":
      return {
        ...state,
        trash: action.payload,
      };

    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };

    case "RESTORE_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...state,
        trash: action.payload.trash,
        archives: action.payload.archives,
      };
    default:
      return { ...state };
  }
};

export { noteReducer, noteInitialState };
