import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import OldSchoolUS from "./pages/OldSchoolUS";
import NordicPage from "./pages/NordicPage";
import TonAventure from "./pages/TonAventure";
import JapanPage from "./pages/JapanPage";
import RussiePage from "./pages/Russie";
//import ImgOpenbig from "./components/ImgOpenbig";
import Page404 from "./pages/Page404";
import Standby from "./pages/Standby";
import LesStyles from "./pages/lesStyles";
import CelticPage from "./pages/CelticPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="pageChangeSet">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plus-dinfos" element={<LesStyles />} />
          <Route path="/oldschool" element={<OldSchoolUS />} />
          <Route path="/japon" element={<JapanPage />} />
          <Route path="/nordic" element={<NordicPage />} />
          <Route path='/celtic' element={<CelticPage />} />
          <Route path="/russie" element={<RussiePage />} />
          <Route path="/europe" element={<Standby />} />
          <Route path="/pacifique" element={<Standby />} />
          <Route path="/ton-aventure" element={<TonAventure />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
      <div className="sect__changePage"></div>
      {/* <ImgOpenbig /> */}
    </div>
  );
}

export default App;
