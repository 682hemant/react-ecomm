import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { Pagination } from '../components/Pagination';
import ProductContainer from './ProductContainer';

const PaginationContainer = () => {
  const products = useSelector(state => state.filterdArr);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <ProductContainer
        products={currentPosts}
      />
      <Pagination
        postPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </div>
  )
}

export default PaginationContainer;
