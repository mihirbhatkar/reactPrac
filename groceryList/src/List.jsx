import React from "react";
import { ListItem } from "./ListItem";

export function List({ list, editFocus, deleteItem }) {
  return (
    <div className="flex flex-col items-center m-2 gap-2 w-full">
      {list.map((item) => {
        return (
          <ListItem
            editFocus={editFocus}
            item={item}
            deleteItem={deleteItem}
            key={item.id}
          />
        );
      })}
    </div>
  );
}
