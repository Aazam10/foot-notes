const noteInitialState = { notes: [], trash: [] };

const noteReducer = (state, action) => {
  console.log(state.trash);
  console.log(action.payload.trash);
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: action.payload };

    default:
      return { ...state };
  }
};

export { noteReducer, noteInitialState };
