import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChanged } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* <li className="page-item">
            <a className="page-link" >
              Previous
            </a>
          </li> */}
        {pages.map(p => {
          return (
            <li
              key={p}
              className={currentPage === p ? "page-item active" : "page-item"}
            >
              <a className="page-link" onClick={() => onPageChanged(p)}>
                {p}
              </a>
            </li>
          );
        })}

        {/* <li className="page-item">
            <a className="page-link">
              Next
            </a>
          </li> */}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChanged : PropTypes.func.isRequired
};

export default Pagination;
