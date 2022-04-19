import { useFilter } from "../../context";
import "./FilterModal.css";
const FilterModal = () => {
  const { filterState, filterDispatch } = useFilter();
  const { priority, dateAdded } = filterState;
  return (
    <div className="filter-modal">
      <div className="filter-header">
        <h4 className="filter-title">SORT BY DATE ADDED</h4>
        <p
          className="clear-filter"
          onClick={() => filterDispatch({ type: "CLEAR" })}
        >
          Clear
        </p>
      </div>
      <div className="date-input">
        <label htmlFor="oldestFirst">
          <input
            type="radio"
            id="oldestFirst"
            name="date"
            checked={dateAdded === "OLDEST_FIRST"}
            onChange={() =>
              filterDispatch({
                type: "SORT_BY_DATE",
                payload: "OLDEST_FIRST",
              })
            }
          />
          Oldest First
        </label>
      </div>

      <div className="date-input">
        <label htmlFor="newestFirst">
          <input
            type="radio"
            id="newestFirst"
            name="date"
            checked={dateAdded === "NEWEST_FIRST"}
            onChange={() =>
              filterDispatch({
                type: "SORT_BY_DATE",
                payload: "NEWEST_FIRST",
              })
            }
          />
          Newest First
        </label>
      </div>
      <h4 className="filter-title">Filter by priority</h4>
      <div className="date-input">
        <label htmlFor="LOW">
          <input
            type="radio"
            id="LOW"
            name="priority"
            checked={priority === "LOW"}
            onChange={() =>
              filterDispatch({ type: "PRIORITY", payload: "LOW" })
            }
          />
          Low
        </label>
      </div>
      <div className="date-input">
        <label htmlFor="MEDIUM">
          <input
            type="radio"
            id="MEDIUM"
            name="priority"
            checked={priority === "MEDIUM"}
            onChange={() =>
              filterDispatch({ type: "PRIORITY", payload: "MEDIUM" })
            }
          />
          Medium
        </label>
      </div>
      <div className="date-input">
        <label htmlFor="HIGH">
          <input
            type="radio"
            id="HIGH"
            name="priority"
            checked={priority === "HIGH"}
            onChange={() =>
              filterDispatch({ type: "PRIORITY", payload: "HIGH" })
            }
          />
          High
        </label>
      </div>
    </div>
  );
};

export { FilterModal };
