import './App.scss';
import { Routes, Route ,useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import OldSchoolUS from './pages/OldSchoolUS';
import NordicPage from './pages/NordicPage';
import TonAventure from './pages/TonAventure';
import JapanPage from './pages/JapanPage';
import RussiePage from './pages/Russie';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route  path='/' element={<HomePage />} />
        <Route path='/oldschool'  element={<OldSchoolUS />} />
        <Route path='/japon'  element={<JapanPage />} />
        <Route path='/nordic'  element={<NordicPage />} />
        <Route path='/russie'  element={<RussiePage />} />
        <Route path='/europe'  element={<NordicPage />} />
        <Route path='/pacifique'  element={<NordicPage />} />
        <Route path='/ton-aventure'  element={<TonAventure />} />
        
      </Routes>
      <div className="sect__changePage"></div>
    </div>
  );
}

export default App;
