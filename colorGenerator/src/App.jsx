import { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [colorArray, setColorArray] = useState(new Values("lightblue").all(10));
  const [isCorrect, setIsCorrect] = useState(true);

  const sendHex = (e) => {
    e.preventDefault();
    const hex = e.target.colorValue.value;
    try {
      const newColor = new Values(hex).all(10);
      setIsCorrect(true);
      setColorArray(newColor);
    } catch (error) {
      setIsCorrect(false);
    }
  };

  return (
    <div className="font-mono h-screen flex flex-col items-stretch">
      <nav className="p-4 flex items-center gap-4">
        <span className="text-3xl">colorGenerator</span>
        <form action="" onSubmit={sendHex} className="flex items-stretch">
          <input
            type="text"
            name="colorValue"
            id="colorValue"
            placeholder="enter hex value/ color name"
            className="w-64  p-1 mr-2 rounded"
            style={
              isCorrect
                ? {
                    border: `2px solid black`,
                  }
                : {
                    border: `2px solid red`,
                  }
            }
          />
          <button className="bg-black border-black border-2 text-white p-1 rounded active:bg-white active:text-black">
            generate
          </button>
        </form>
      </nav>
      <div className="grid grid-cols-6 h-full">
        {colorArray.map((color) => {
          return <SingleColor color={color} key={color.rgb}></SingleColor>;
        })}
      </div>
    </div>
  );
}

export default App;
