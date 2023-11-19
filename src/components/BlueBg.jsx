const BlueBg = ({ title, children }) => {
  return (
    <div className=" bg-gradient-to-b from-blue-900 to-blue-800">
      <div className=" pt-6 text-white text-4xl font-medium text-center  md:pt-10 md:text-5xl lg:text-5xl ">
        {title}
      </div>
      <div className="pt-3 md:pt-5 ">{children}</div>
    </div>
  );
};

export default BlueBg;
