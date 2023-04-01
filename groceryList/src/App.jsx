import { List } from "./List";
import { Alert } from "./Alert";
import { AddItem } from "./AddItem";
import { useEffect, useState, useRef } from "react";

function App() {
  const [storage, setStorage] = useState(localStorage);

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);

  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (alertType !== null && showAlert === true) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [alertType]);

  const clearItems = () => {
    localStorage.clear();
    setStorage(localStorage);
    setShowAlert(true);
    setAlertType({ type: "success", msg: "List cleared!" });
  };

  const editFocus = (id) => {
    const oldValue = JSON.parse(localStorage.getItem(id)).itemName;
    inputRef.current.value = oldValue;
    inputRef.current.focus();
    setEdit(true);
    setEditId(id);
  };

  const editForm = (event, editId) => {
    event.preventDefault();
    const updatedValue = event.target.item.value;
    const item = JSON.parse(localStorage.getItem(editId));
    item.itemName = updatedValue;
    localStorage.setItem(editId, JSON.stringify(item));

    setStorage(localStorage);

    setShowAlert(true);
    setAlertType({ type: "info", msg: "Item updated!" });
    setEdit(false);

    document.getElementById("item").value = "";
  };

  const deleteItem = (oldId) => {
    localStorage.removeItem(oldId);
    setStorage(localStorage);

    setShowAlert(true);
    setAlertType({ type: "error", msg: "Item deleted!" });

    document.getElementById("item").value = "";
  };

  const addItem = (e) => {
    e.preventDefault();
    const newItem = e.target.item.value;
    const newId = new Date().getTime();
    localStorage.setItem(newId, JSON.stringify({ itemName: newItem }));

    setStorage(localStorage);
    setShowAlert(true);
    setAlertType({ type: "success", msg: "Item added!" });

    document.getElementById("item").value = "";
  };

  // converting storage to list because cannot render objects
  const list = Object.keys(storage).map((id) => ({
    id,
    item: JSON.parse(storage.getItem(id)),
  }));

  return (
    <div className="max-w-xl mx-auto font-mono ">
      <div className="mt-48 bg-white flex flex-col gap-2 items-center p-4 rounded-xl">
        <h1 className="text-4xl text-teal-400 font-bold font-sans">
          Grocery Bud!
        </h1>

        <AddItem
          edit={edit}
          editId={editId}
          editForm={editForm}
          inputRef={inputRef}
          addItem={addItem}
        />

        {showAlert ? <Alert type={alertType} /> : <p className="hidden"></p>}

        <List list={list} editFocus={editFocus} deleteItem={deleteItem} />

        {storage.length > 0 ? (
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
  );
}

export default App;
