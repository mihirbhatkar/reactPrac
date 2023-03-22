const ListItem = ({ item: { id, title, price, img, desc } }) => {
  return (
    <div className="md:grid md:grid-cols-[2.5fr_3fr] gap-4  p-4 rounded-lg bg-white">
      <img
        src={img}
        className=" rounded-lg w-96 h-[167px] mx-auto object-cover"
        alt={title}
      />
      <div className="mt-2">
        <div className="flex flex-row items-center justify-between">
          <span className="font-bold capitalize">{title}</span>
          <span className="text-teal-400">${price}</span>
        </div>
        <hr className=" mx-auto mb-4 mt-1 bg-border-0 rounded bg-gray-300" />
        <p className=" text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ListItem;
