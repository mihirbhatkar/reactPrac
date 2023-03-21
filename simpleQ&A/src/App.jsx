import { useState } from "react";
import questions from "./data";

const App = () => {
  return (
    <main className=" flex items-center justify-center min-h-screen">
      <div
        className="shadow-xl rounded-sm p-4 bg-green-400 sm:w-5/6 w-full text-white 
      grid grid-cols-[1fr_3fr]"
      >
        <span className="text-5xl p-2">Q&A</span>
        <div className="p-2 text-xl gap-4 flex flex-col items-start justify-center">
          {questions.map((item) => {
            return <Question key={item.id} item={item} />;
          })}
        </div>
      </div>
    </main>
  );
};

const Question = ({ item: { id, title, info } }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="rounded-sm  bg-white p-4 text-black w-full">
      <div className=" flex gap-2 items-center justify-between">
        {title}
        {hidden ? (
          <button
            onClick={() => setHidden(!hidden)}
            className="w-10 h-10 bg-green-100 rounded-sm "
          >
            +
          </button>
        ) : (
          <button
            onClick={() => setHidden(!hidden)}
            className="w-10 h-10 bg-green-100 rounded-sm"
          >
            -
          </button>
        )}
      </div>
      {!hidden && <p className="bg-green-100 mt-2 rounded-sm p-2">{info}</p>}
    </div>
  );
};

export default App;
