import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar.jsx";
import Mainpage from "./Mainpage.jsx";
import Footer from "./components/Footer.jsx";
import ContactPage from "./components/ContactPage.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => (
  <div>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Navbar />
        </header>
        <Mainpage />
        {/* <Routes>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes> */}
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
