const InstCard = ({ name, image, description }) => {
  return (
    <div
      className="border border-gray-300 relative bg-white pb-10 rounded-lg px-2 pt-4  shadow-2xl shadow-blue-500"
      style={{ width: "400px", height: "400px" }}
    >
      <div className="text-gray-800 text-3xl text-center font-semibold">
        {name}
      </div>
      <div className="border border-gray-300 text-gray-700 text-sm bg-white p-4 pt-7 rounded-lg mt-32 italic">
        {description}
      </div>
      <div className="flex justify-center mt-4 absolute top-11 left-1/3">
        <img
          src={`/${image}`}
          alt=""
          className="rounded-full w-36 h-36 object-cover border border-gray-300"
        />
      </div>
    </div>
  );
};

export default InstCard;
