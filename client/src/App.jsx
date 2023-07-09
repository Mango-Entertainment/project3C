import DataView from "./components/DataView";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-[375px] lg:w-[1440px] mx-auto">
        <Navbar />{" "}
        <Routes>
          <Route element={<DataView />} path="/dataview" />
          <Route element={<MainPage />} path="/" />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
