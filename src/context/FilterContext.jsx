import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    priority: "",
    dateAdded: "",
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
