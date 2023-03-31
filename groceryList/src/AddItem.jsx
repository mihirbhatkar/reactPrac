import React from "react";
export function AddItem({ addItem, inputRef, edit, editForm, editId }) {
  return (
    <div>
      {edit ? (
        <form
          action=""
          onSubmit={() => editForm(event, editId)}
          className="space-x-4 m-2"
        >
          <input
            ref={inputRef}
            className="p-2 w-96 rounded-xl border-2 border-teal-200 focus:border-teal-200 focus:border-2"
            type="text"
            required
            placeholder="enter item"
            name="item"
            id="item"
          />
          <button className="bg-teal-100 border-2 border-teal-200 p-2 rounded-xl">
            Edit
          </button>
        </form>
      ) : (
        <form action="" onSubmit={addItem} className="space-x-4 m-2">
          <input
            ref={inputRef}
            className="p-2 w-96 rounded-xl border-2 border-teal-200 focus:border-teal-200 focus:border-2"
            type="text"
            required
            placeholder="enter item"
            name="item"
            id="item"
          />
          <button className="bg-teal-100 border-2 border-teal-200 p-2 rounded-xl">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
