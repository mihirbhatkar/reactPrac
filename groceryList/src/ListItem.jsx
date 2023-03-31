import React, { useState } from "react";
import { BsCheck, BsFillTrashFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";

export function ListItem({ item: { item, id }, deleteItem, editFocus }) {
  const [checked, setChecked] = useState(false);

  return (
    <article className="bg-teal-100 p-2 rounded-xl w-full">
      <div className="flex bg-white rounded-xl p-2 items-center justify-between w-full shadow">
        <span
          style={{
            textDecorationLine: checked ? "line-through" : "",
          }}
        >
          {item}
        </span>
        <div className="space-x-4 ">
          <button
            onClick={() => editFocus(id)}
            className="bg-teal-50 p-2 rounded-xl border-2 border-transparent focus:border-2 focus:border-teal-200 "
          >
            <AiOutlineEdit></AiOutlineEdit>
          </button>
          <button
            onClick={() => deleteItem(id)}
            className="bg-teal-50 p-2 rounded-xl border-2 border-transparent focus:border-2 focus:border-teal-200"
          >
            <BsFillTrashFill></BsFillTrashFill>
          </button>
          <button
            onClick={() => setChecked(!checked)}
            className="bg-teal-50 p-2 rounded-xl border-2 border-transparent focus:border-2 focus:border-teal-200 "
          >
            {checked ? <GrFormClose></GrFormClose> : <BsCheck></BsCheck>}
          </button>
        </div>
      </div>
    </article>
  );
}
