const noteInitialState = { notes: [], trash: [] };

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
    default:
      return { ...state };
  }
};

export { noteReducer, noteInitialState };
