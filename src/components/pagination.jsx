/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = props => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pagesCount + 1)

    if (pagesCount < 2) return null;
    return (
        <>
            <nav>
                <ul className="pagination">
                    <li className="page-item disabled"
                        onClick={() => onPageChange(currentPage === 1 ? 1 : currentPage - 1)}>
                        <a className="page-link">Previous</a>
                    </li>
                    {pages.map(page => (
                        <li key={page}
                            className={page === currentPage ? 'page-item active' : 'page-item'}>
                            <a className="page-link"
                               onClick={() => onPageChange(page)}>{page}</a>
                        </li>
                    ))}
                    <li className="page-item disabled"
                        onClick={() => onPageChange(currentPage === pages.length ? currentPage : currentPage + 1)}>
                        <a className="page-link">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
