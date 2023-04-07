import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";
import ItemList from "../Components/ItemList";

const ItemDetails = () => {
  const { id } = useParams();
  const [displayItem, setDisplayItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    const findItem = async () => {
      try {
        const data = await fetch(url);
        const dataJSON = await data.json();
        const requiredItem = dataJSON.drinks.filter(
          (item) => item.idDrink === id
        )[0];
        setDisplayItem(requiredItem);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    findItem();
  }, [id]);

  if (isLoading) {
    return (
      <h1 className="text-4xl grid items-center  justify-center min-h-[calc(100vh-72px)]">
        Loading...
      </h1>
    );
  }
  if (!displayItem) {
    return (
      <h1 className="text-4xl grid items-center text-center justify-center min-h-[calc(100vh-72px)]">
        Something went wrong 😔
      </h1>
    );
  }
  const {
    strDrink: name,
    strAlcoholic: info,
    strGlass: glass,
    strCategory: category,
    strDrinkThumb: img,
    strInstructions: instruct,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = displayItem;

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  return (
    <div className="grid items-center justify-center min-h-[calc(100vh-72px)] p-16">
      <div className="card md:grid md:grid-cols-2 flex flex-col bg-[#19A7CE] shadow-xl z-0">
        <figure className="p-8 md:p-0">
          <img src={img} alt={name} className="rounded-xl md:h-[90%] h-80" />
        </figure>
        <div className="card-body items-center text-sm text-center md:mt-0 mt-[-50px]">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="font-bold italic">{category}</p>
          <p>
            <span className="font-bold">Info:</span> {info}
          </p>
          <p>
            <span className="font-bold">Glass:</span> {glass}
          </p>
          <p>
            <span className="font-bold">Ingredients:</span>{" "}
            {ingredients.map((item) => {
              if (item) {
                return (
                  <span key={item} className="badge m-1">
                    {item}{" "}
                  </span>
                );
              }
            })}
          </p>
          <p>
            <span className="font-bold ">Instructions:</span> {instruct}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
