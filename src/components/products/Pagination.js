import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <ListItemContainer>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <NavLink onClick={() => paginate(pageNumber)} to={`${pageNumber}`}>
              {pageNumber}
            </NavLink>
          </li>
        ))}
      </ListItemContainer>
    </>
  );
};

const ListItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    list-style-type: none;
    margin-left: 1.5rem;
    a {
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      background-color: rgb(75, 40, 109);
      border-radius: 50%;
      color: #fff;
      padding: 0.4rem 0.8rem;
    }
    a.active {
      background-color: grey;
      border-radius: 50%;
      color: black;
    }
  }
  margin: 2rem 0;
`;
