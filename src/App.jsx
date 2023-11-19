import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./MainPage.jsx";
import Footer from "./components/Footer.jsx";

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
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
