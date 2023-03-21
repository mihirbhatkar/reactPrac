import { useState } from "react";
import reviews from "./data";
import { ImQuotesLeft } from "react-icons/im";

const Reviews = () => {
  const [show, setShow] = useState(0);
  const [disable, setDisable] = useState(false);

  const handleForwardClick = () => {
    if (show < reviews.length - 1) {
      setShow(show + 1);
    } else {
      setShow(0);
    }
  };
  const handleBackwardClick = () => {
    if (show > 0) {
      setShow(show - 1);
    } else {
      setShow(reviews.length - 1);
    }
  };
  const surprise = () => {
    var randomValue = Math.floor(Math.random() * reviews.length);
    if (randomValue == show) {
      surprise();
    } else {
      setShow(randomValue);
    }
  };

  const { name, job, image, text } = reviews[show];

  return (
    <div className="flex items-center justify-center min-h-screen text-center font-serif">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-blue-400 text-[3rem] ">Reviews</h1>
        <hr className="w-5" />
        <div className="p-5 m-5 bg-blue-100 rounded-sm shadow-xl flex flex-col items-center gap-2 max-w-lg">
          <div className="relative">
            <img
              src={image}
              alt=""
              className=" object-cover rounded-[50%] w-[100px] h-[100px] border-black border-solid border-2"
            />
            <span className="  absolute top-3 left-[-5px] bg-blue-300 p-1 rounded-xl">
              <ImQuotesLeft />
            </span>
          </div>

          <span className=" capitalize font-bold">{name} </span>
          <span className=" capitalize  italic font-bold text-blue-400">
            {job}
          </span>
          <p>{text}</p>
          <div className=" space-x-2">
            <button
              onClick={handleBackwardClick}
              className=" bg-white rounded-sm p-2 disabled:opacity-40"
              disabled={disable}
            >
              &#60;
            </button>
            <button
              onClick={handleForwardClick}
              className=" bg-white rounded-sm p-2 disabled:opacity-40"
              disabled={disable}
            >
              {" "}
              &#62;{" "}
            </button>
          </div>
          <button onClick={surprise} className="bg-blue-200 rounded-sm p-2">
            Surprise Me!
          </button>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
