import { useState } from "react";

function usePage() {
  const [currentPage, setCurrentPage] = useState(0);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return [currentPage, changePage];
}

export default usePage;
