import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SeasonOme from "../Pages/SeasonOne/Season01";
import Home from "../Pages/Home/Home";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

function Rotas() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/season-1" element={<SeasonOme />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
