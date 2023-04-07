import Search from "../Components/Search";
import ItemList from "../Components/ItemList";
import React from "react";

const Home = () => {
  return (
    <div
      style={{
        minHeight: `calc(100vh - 72px)`,
      }}
      className="max-w-5xl mx-auto flex flex-col pb-8 items-center "
    >
      <Search />
      <ItemList />
    </div>
  );
};
export default Home;
