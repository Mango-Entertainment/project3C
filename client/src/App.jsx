import DataView from "./components/DataView";
import MainPage from "./components/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DataView />} path="/dataview" />
        <Route element={<MainPage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
