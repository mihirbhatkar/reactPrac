import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { searchValue, setSearchValue } = useGlobalContext();
  return (
    <React.Fragment>
      <div className="m-1">
        <h1 className="font-extrabold text-3xl text-black dark:text-white text-center my-4">
          Search For Drinks!
        </h1>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          name="search"
          id="search"
          placeholder="eg. martini"
          className="border-black font-bold rounded-xl ml-auto text-black border-2 w-96 text-center h-12 p-2"
        />
      </div>
    </React.Fragment>
  );
};
export default Search;
