import { useSelector, useDispatch } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { page, numOfPages } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <button
        type="button"
        className="prev-btn"
        onClick={prevPage}
        disabled={page === 1}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              type="button"
              className={`pageBtn ${pageNumber === page && "active"}`}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className="next-btn"
        onClick={nextPage}
        disabled={page === numOfPages}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
