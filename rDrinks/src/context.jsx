import React, { useContext } from "react";
import { useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);
  const [permanentList, setPermanentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetch(url);
        const dataItems = await data.json();
        setItemList(dataItems.drinks);
        setPermanentList(dataItems.drinks);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setItemList(permanentList);
    } else {
      const searchRegex = new RegExp(`^${searchValue}`, "i");
      const newItems = [];
      permanentList.forEach((item) => {
        if (searchRegex.test(item.strDrink)) {
          newItems.push(item);
        }
      });
      setItemList(newItems);
    }
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        permanentList,
        itemList,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
