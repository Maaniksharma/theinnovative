const Footer = () => (
  <footer className="mt-10 md:mt-12 bg-blue-900 text-white py-8 px-4">
    <div className="container  mx-auto md:mx-24 lg:mx-36">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="uppercase mb-2 md:mt-4 font-bold">Links</h5>
          <ul className="mb-4">
            <li className="mt-2">
              <a href="#courses" className="hover:underline text-gray-200">
                Courses
              </a>
            </li>
            <li className="mt-2">
              <a href="/contact" className="hover:underline text-gray-200">
                Contact
              </a>
            </li>
            <li className="mt-2">
              <a href="/about" className="hover:underline text-gray-200">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="uppercase mt-4 mb-2 font-bold">Legal</h5>
          <ul className="mb-4">
            <li className="mt-2">
              <a href="/privacy" className="hover:underline text-gray-200">
                Privacy
              </a>
            </li>
            <li className="mt-2">
              <a href="/terms" className="hover:underline text-gray-200">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="uppercase mb-2 md:mt-4 font-bold">Location</h5>
          <p className="text-gray-200">Yamunanagar, Haryana</p>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-2 md:mt-4 font-bold">Contact</h5>
            <a href="tel:+919017767472">
              <p className="text-gray-200">Phone: +919017767472</p>
            </a>
            <a href="mailto:manusharma.ms35@gmail.com">
              <p className="text-gray-200">Email: manusharma.ms35@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="uppercase mt-4 mb-2 font-bold">Social</h5>
          <ul className="mb-4">
            <li className="mt-2">
              <a href="#" className="hover:underline text-gray-200">
                Facebook
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="hover:underline text-gray-200">
                Instagram
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="hover:underline text-gray-200">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mt-16 border-t-2 border-gray-300 flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 text-center md:text-left mt-4">
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} The Innovative. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
