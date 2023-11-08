import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LANDING2 from "./pages/LANDING2";
import PROMPT2 from "./pages/PROMPT2";
import Login2 from "./pages/Login2";
import PRICE from "./pages/PRICE";
import ABOUT from "./pages/ABOUT";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/prompt2":
        title = "";
        metaDescription = "";
        break;
      case "/login2":
        title = "";
        metaDescription = "";
        break;
      case "/price":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LANDING2 />} />
      <Route path="/prompt2" element={<PROMPT2 />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/price" element={<PRICE />} />
      <Route path="/about" element={<ABOUT />} />
    </Routes>
  );
}
export default App;
