const SuccessStory = ({ name, story }) => (
  <div className="p-4 rounded shadow-lg bg-blue-100 mx-2 md:max-w-md ">
    <h2 className="text-2xl font-bold mb-2 text-center text-blue-700">
      {name}
    </h2>
    <p className="text-gray-700 text-center">{story}</p>
  </div>
);

export default SuccessStory;
