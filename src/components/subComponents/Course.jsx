const Course = ({ title, description, action }) => (
  <div className="border border-gray-300 relative text-white w-72 h-64 rounded px-6">
    <div className="absolute top-0 right-3 overflow-hidden h-full">
      <div className="bg-blue-600 h-12 w-3 transform -skew-x--12"></div>
    </div>
    <div className="py-4 text-2xl font-semibold">{title}</div>
    <div className="pb-2 text-sm">{description}</div>
    <div className="text-end mt-2">
      <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
        {action}
      </button>
    </div>
  </div>
);
export default Course;
