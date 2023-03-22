import { useState } from "react";
import ListItem from "./ListItem";
import menu from "./data";

const Categories = () => {
  const [category, setCategory] = useState("all");

  let i = 0;
  var categories = ["all"];
  while (i < menu.length) {
    if (!categories.includes(menu[i].category)) {
      categories.push(menu[i].category);
    }
    i++;
  }

  var newMenu = [];
  if (category == "all") {
    newMenu = menu;
  } else {
    newMenu = menu.filter((item) => item.category === category);
  }

  return (
    <section>
      <div className="flex items-center justify-center p-4 m-2 ">
        <ul className="flex flex-row gap-2">
          {categories.map((cat) => {
            return (
              <li>
                <button
                  onClick={() => setCategory(cat)}
                  className="bg-teal-50 p-2 m-2 capitalize rounded-lg hover:opacity-90 hover:bg-teal-100 focus:bg-teal-100 focus:border-teal-400 focus:border-2 focus:border-solid border-2 border-black border-transparent"
                >
                  {cat}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" flex flex-col  gap-4  md:grid md:grid-cols-2 items-stretch  bg-teal-200 p-4 rounded-lg md:gap-4">
        {newMenu.map((item) => {
          return <ListItem key={item.id} item={item}></ListItem>;
        })}
      </div>
    </section>
  );
};
export default Categories;
