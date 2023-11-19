const StyleCircle = ({ content }) => {
  const words = content.split(" ");

  return (
    <div className="w-48 h-48 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg ring-4 ring-slate-300 color-transition">
      <div className="text-2xl md:text-3xl font-semibold  text-center tt">
        {words.map((item, index) => (
          <div className="block" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleCircle;
