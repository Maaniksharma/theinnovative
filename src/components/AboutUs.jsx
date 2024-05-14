import Bm from "./subComponents/Bm";

const AboutUs = () => {
  return (
    <div className=" w-full py-8 px-3 md:px-6 md:py-12 lg:px-16">
      <div className=" text-slate-600 text-4xl font-medium md:text-5xl lg:text-5xl">
        About Us
      </div>
      <div className="pt-3 md:pt-5 text-xl text-slate-500 md:text-2xl">
        The Innovative Institute, located in <Bm>Yamunanagar</Bm>, is your go-to
        place for fast and easy English learning, perfect for <Bm> IELTS</Bm>,{" "}
        <Bm>PTE</Bm>, <Bm>Going Abroad</Bm>, <Bm>Interview preparation</Bm> and{" "}
        <Bm>Exam readiness</Bm>. Our mission is to make English learning
        enjoyable and accessible to everyone. We believe that with the right
        guidance, anyone can excel in English. Join us, and let's move on this
        exciting journey together. Your success is our success, and we're here
        to support you every step of the way.
      </div>
    </div>
  );
};
export default AboutUs;
