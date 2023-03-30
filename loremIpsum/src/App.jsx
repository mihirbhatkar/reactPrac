import { useState } from "react";
import text from "./data";

function App() {
  const [para, setPara] = useState([]);

  const generateParagraphs = (e) => {
    e.preventDefault();
    const numberOfParagraphs = e.target.para.value;
    const newParagraphs = [];
    if (numberOfParagraphs === 0 || isNaN(numberOfParagraphs)) setPara([]);
    else {
      let temp;
      for (let i = 0; i < numberOfParagraphs; i++) {
        let newIndex = Math.floor(Math.random() * (text.length - 1));
        // for ensuring that paragraphs don't repeat immediately
        if (temp === newIndex) {
          newIndex = newIndex + 1;
          if (newIndex > text.length - 1) {
            newIndex = newIndex % text.length;
          }
        }
        temp = newIndex;
        //
        newParagraphs.push(text[newIndex]);
      }
      setPara(newParagraphs);
    }
  };
  let translateValue = 300;
  let paraOpacity = 0;
  if (para.length > 0) {
    translateValue = 0;
    paraOpacity = 1;
  }
  return (
    <div className="max-w-2xl mx-auto font-mono p-4 relative h-screen w-full ">
      <h1 className="text-5xl text-center mb-1 mt-4">loremIpsum</h1>
      <hr className="w-32 h-1 mx-auto mb-4 bg-border-0 rounded bg-black " />
      <div className="form-space">
        <form
          onSubmit={generateParagraphs}
          className="flex flex-col items-center"
          style={{
            transform: `translateY(${translateValue}%)`,
          }}
        >
          <div className="space-x-2 mb-4">
            <label htmlFor="para">Number of Paragraphs</label>
            <input
              min={0}
              type="number"
              name="para"
              id="para"
              className="border-black text-center w-10 border-2 rounded"
            />
          </div>
          <button className="border-black border-2 rounded-md p-1 hover:bg-slate-100 active:bg-black active:text-white">
            Generate
          </button>
        </form>
      </div>
      <div
        className="paragraph-section mx-auto flex flex-col items-center gap-4 rounded-xl mt-4"
        style={{ opacity: `${paraOpacity}` }}
      >
        {para.map((item) => {
          return <p className="">{item}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
