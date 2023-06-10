import "./App.scss";
import { Routes, Route, useNavigate, useParams, useLocation } from "react-router-dom";
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
import CrediPage from "./pages/CrediPage";
import UikitPage from "./pages/Uikitpage";

function App() {
  const navigate = useNavigate();
  const location = useLocation()

  // const refreshPage = () => {
  //   navigate(0);
  // };
  const pagess = useParams();
  console.log(pagess, location);

  function changeElement(){
    if(location.pathname == 'japon'){
      let elGood = <JapanPage/>
      return elGood
    }else{
      let elGood = <Page404/>
      return elGood
    }
  }


  return (
    <div className="App">
      <NavBar />
      <div className="pageChangeSet">
        <Routes>
          <Route exact path="/" element={<HomePage />} errorElement={<Page404/>}/>
          <Route exact path="/plus-dinfos" element={<LesStyles />} />
          <Route exact path="/oldschool" element={<OldSchoolUS />} />
          <Route exact path="/japon" element={<JapanPage />} />
          <Route exact path="/nordic" element={<NordicPage />} />
          <Route exact path="/celtic" element={<CelticPage />} />
          <Route exact path="/russie" element={<RussiePage />} />
          <Route exact path="/europe" element={<Standby />} />
          <Route exact path="/pacifique" element={<Standby />} />
          <Route exact path="/ton-aventure" element={<TonAventure />} />
          <Route path="/:id" element={changeElement()} errorElement={<Page404/>}/>
          <Route path="/*" element={<Page404 />} errorElement={<Page404/>}/>
          <Route path="/credit" element={<CrediPage />} />
          <Route path="/uikit" element={<UikitPage />} />
        </Routes>
      </div>
      {/* {refreshPage} */}
      <div className="sect__changePage"></div>
      {/* <ImgOpenbig /> */}
     
    </div>
  );
}

export default App;
