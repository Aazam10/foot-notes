const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return { ...state, dateAdded: action.payload };
    case "PRIORITY":
      return { ...state, priority: action.payload };
    case "CLEAR":
      return {
        ...state,
        dateAdded: "",
        priority: "",
      };

    default:
      return { ...state };
  }
};

export { filterReducer };
