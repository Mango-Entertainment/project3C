import DataView from "./components/DataView";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TableView from "./components/TableView";
import {useEffect, useMemo, useState} from "react";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://mangogrammerjamp3c.onrender.com/api/userData"
      );
      const data = await res.json();
      setUserData(data);
      console.log("data for Table", data);
    };
    getData();
  }, []);

  const columns = useMemo(
    () => [{Header: "First Name", accessor: `${userData}`}],
    []
  );
  return (
    <Router>
      <div className="w-full md:mx-auto">
        <Navbar />{" "}
        <Routes>
          <Route element={<TableView />} path="/dataview" />
          <Route element={<MainPage />} path="/" />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
