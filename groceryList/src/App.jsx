import { Alert } from "./Alert";
import { ListItem } from "./ListItem";
import { AddItem } from "./AddItem";
import { useEffect, useState, useRef } from "react";

function App() {
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (alertType !== null) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [alertType]);

  const clearItems = () => {
    setList([]);
    setAlertType({ type: "success", msg: "List cleared!" });
  };

  const editFocus = (id) => {
    const oldValue = list.filter((item) => item.id == id)[0].item;
    inputRef.current.value = oldValue;
    inputRef.current.focus();
    setEdit(true);
    setEditId(id);
  };

  const editForm = (event, editId) => {
    event.preventDefault();
    const updatedValue = event.target.item.value;
    const updatedItem = { item: updatedValue, id: editId };
    const updatedList = list.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });

    setList(updatedList);
    setAlertType({ type: "info", msg: "Item updated!" });
    setEdit(false);
  };

  const deleteItem = (oldId) => {
    const newList = list.filter((item) => item.id != oldId);

    setList(newList);
    setAlertType({ type: "error", msg: "Item deleted!" });

    document.getElementById("item").value = "";
  };

  const addItem = (e) => {
    e.preventDefault();
    const newItem = e.target.item.value;
    const newId = new Date().getTime();

    setList([...list, { item: newItem, id: newId }]);
    setAlertType({ type: "success", msg: "Item added!" });

    document.getElementById("item").value = "";
  };
  return (
    <div className="max-w-xl mx-auto font-mono ">
      <div className="mt-48 bg-white flex flex-col gap-2 items-center p-4 rounded-xl">
        <h1 className="text-4xl text-teal-400 font-bold">Grocery Bud!</h1>
        {}
        <AddItem
          edit={edit}
          editId={editId}
          editForm={editForm}
          inputRef={inputRef}
          addItem={addItem}
        />

        {showAlert ? <Alert type={alertType} /> : <p className="hidden"></p>}

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
          {list.length > 0 ? (
            <button
              onClick={clearItems}
              className="bg-teal-100 border-2 border-transparent focus:border-2 focus:border-teal-200 p-2 rounded-xl mt-2"
            >
              Clear Items
            </button>
          ) : (
            <p className="hidden"></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
