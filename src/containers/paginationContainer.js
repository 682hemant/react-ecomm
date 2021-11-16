import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Pagination } from "../components/products/Pagination";
import ProductContainer from "./products/ProductContainer";

const PaginationContainer = () => {
  const products = useSelector((state) => state.prodReducer.filterdArr);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <ProductContainer products={currentPosts} />
      <Pagination
        postPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </section>
  );
};

export default PaginationContainer;
