// Search.jsx
import React from "react";
import { useSearchGlobally } from "../../context/SearchContext";
import Cateogry from "./Cateogry";
import CategoryPurpose from "./CategoryPurpose";
import MaxPrice from "./MaxPrice";
import '../search/search.css';

const Search = () => {
  const { searchQuery, setSearchQuery } = useSearchGlobally(); // Destructure the result from useSearchGlobally

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
     <div className="searchCategoryContainer">
     <div className="search_container">
        <input
          onChange={handleSearch}
          value={searchQuery}
          type="search"
          name="search"
          placeholder="Search by Address"
        />
      </div>

      {/* ----------choose type dropdown------------ */}
      {/* <Cateogry /> */}
      {/* <CategoryPurpose /> */}
      {/* <MaxPrice /> */}
     </div>
    </>
  );
};

export default Search;








