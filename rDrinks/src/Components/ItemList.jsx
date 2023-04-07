import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const ItemList = () => {
  const { isLoading, itemList } = useGlobalContext();
  if (isLoading) {
    return (
      <h1 className="text-4xl grid items-center  justify-center min-h-[calc(100vh-250px)]">
        Loading...
      </h1>
    );
  }

  if (itemList.length == 0) {
    return (
      <h1 className="text-4xl grid items-center  justify-center min-h-[calc(100vh-250px)]">
        There is no such drink!
      </h1>
    );
  }

  return (
    <div className="bg-[#19A7CE] mt-6 rounded-xl shadow-xl shadow-slate-600 ">
      <div className="m-4 bg-[#F6F1F1] text-black shadow-xl rounded-xl h-full">
        <div className="md:grid md:grid-cols-2 flex flex-col gap-4 mx-auto p-4">
          {itemList.map((item) => {
            const { strDrinkThumb, strDrink, strCategory, idDrink } = item;
            return (
              <div
                key={idDrink}
                className="card  w-80 h-96 mx-auto bg-[#19A7CE] text-white shadow-xl"
              >
                <figure>
                  <img className="" src={strDrinkThumb} alt={strDrink} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{strDrink}</h2>
                  <p>{strCategory}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={`/drink/${idDrink}`}
                      className="btn hover:bg-[#1dc2ef] bg-[#3b7c9a]"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ItemList;
