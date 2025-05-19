import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SeasonOneTutorial from "../Components/SeasonOneTutorial/SeasonOneTutorial";
import Home from "../Pages/Home/Home";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

function Rotas() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/season-1" element={<SeasonOneTutorial />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
