import Categories from "./Categories";

const App = () => {
  return (
    <main className=" font-serif max-w-7xl mx-auto flex flex-col p-4 justify-between items-center">
      <h1 className="text-5xl mt-16">Our Menu</h1>
      <hr className=" w-24 h-1 mx-auto mb-2s mt-2 bg-gray-100 border-0 rounded  dark:bg-gray-700" />
      <section className="  w-full rounded-xl">
        <Categories></Categories>
      </section>
    </main>
  );
};
export default App;
