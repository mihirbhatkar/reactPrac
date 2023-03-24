import { useEffect, useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import data from "./data";

const App = () => {
  const [display, setDisplay] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("useEffect rendered");
    const companies = [];
    const getCompanies = () => {
      data.map((item) => {
        companies.push(item.company);
      });
    };
    getCompanies();

    setCompanyList(companies);
    setDisplay(companies[0]);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h1 className="text-6xl">Loading...</h1>;
  }

  var [displayData] = data.filter((item) => item.company === display);
  const { title, dates, duties, company, id, order } = displayData;

  return (
    <div className=" font-sans bg-indigo-800 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-slate-50 m-4">Experience</h1>
      <div className="bg-slate-50 flex flex-col min-h-[400px] gap-2 w-10/12 md:w-2/3 md:grid md:grid-cols-[1fr_4fr] md:gap-4 p-6 m-2 rounded-sm">
        <div className="w-full flex  gap-2 sm:flex-col ">
          {console.log("body rendered")}
          {companyList.map((item) => {
            return (
              <button
                onClick={() => setDisplay(item)}
                className="bg-indigo-200 font-semibold border-transparent border-2 border-solid focus:border-indigo-500 focus:border-2 focus:border-solid rounded-sm p-2 w-full"
                key={item}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start ">
          <span className="font-bold text-lg">{title}</span>
          <span className="bg-slate-200 rounded-sm p-2">{company}</span>
          <span className="font-medium text-slate-500 italic">{dates}</span>
          <ul className="space-y-2">
            {duties.map((item) => {
              return (
                <li
                  className="border-indigo-100 border-2 border-solid bg-indigo-50 rounded-sm p-2 text-md md:gap-2 md:grid sm:grid-cols-[30px_auto] sm:items-center"
                  key={item}
                >
                  <BsChevronDoubleRight className="text-indigo-800 mr-2 inline md:w-8 md:h-6 " />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
