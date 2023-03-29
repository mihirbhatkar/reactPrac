import { Card } from "./Card";
import { useEffect, useState } from "react";
import reviews from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < reviews.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  const handleForwardClick = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % reviews.length;
      return result;
    });
  };

  const handleBackwardClick = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(reviews.length - 1);
  };

  // const surprise = () => {
  //   var randomValue = Math.floor(Math.random() * reviews.length);
  //   if (randomValue == index) {
  //     surprise();
  //   } else {
  //     setIndex(randomValue);
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-h-screen text-center font-serif">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-blue-400 text-[3rem] ">Reviews</h1>
        <hr className="w-5" />
        <div className="slider w-full">
          {reviews.map((item, itemIndex) => {
            const { name, job, image, text } = item;

            var translateValue = 0;
            if (index == reviews.length - 1 && itemIndex == 0) {
              translateValue = 100;
            } else if (index == 0 && itemIndex == reviews.length - 1) {
              translateValue = -100;
            } else if (itemIndex > index) {
              translateValue = 100;
            } else if (itemIndex < index) {
              translateValue = -100;
            }

            return (
              <article
                style={{
                  transform: `translateX(${translateValue}%)`,
                  opacity: itemIndex === index ? 1 : 0,
                  visibility: itemIndex === index ? `visible` : `hidden`,
                }}
              >
                <Card image={image} name={name} job={job} text={text} />
              </article>
            );
          })}
        </div>
        <div className=" space-x-2">
          <button
            onClick={handleBackwardClick}
            className=" bg-white rounded-sm p-2 border-2 border-blue-200 focus:border-blue-400 focus:border-2 focus:border-solid disabled:opacity-40"
          >
            &#60;
          </button>
          <button
            onClick={handleForwardClick}
            className=" bg-white rounded-sm p-2 border-2 border-blue-200 focus:border-blue-400 focus:border-2 focus:border-solid disabled:opacity-40"
          >
            {" "}
            &#62;{" "}
          </button>
        </div>
        {/* <button onClick={surprise} className="bg-blue-200 rounded-sm p-2 mt-4">
          Surprise Me!
        </button> */}
      </div>
    </div>
  );
};
export default Reviews;
