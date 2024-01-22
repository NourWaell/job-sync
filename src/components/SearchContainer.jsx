import { useSelector, useDispatch } from "react-redux";
import { useState, useMemo } from "react";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";
import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");

  const dispatch = useDispatch();

  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleClearFilters = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  const debounce = () => {
    let timeoutId;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 500);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <form className="form">
        <h4>Search Form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
            isLoading={isLoading}
          />
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
            isLoading={isLoading}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
            isLoading={isLoading}
          />
          <button
            type="button"
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
