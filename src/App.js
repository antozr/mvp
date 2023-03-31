import './App.scss';
import { Routes, Route ,useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import OldSchoolUS from './pages/OldSchoolUS';
import NordicPage from './pages/NordicPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route  path='/' element={<HomePage />} />
        <Route path='/oldschool'  element={<OldSchoolUS />} />
        <Route path='/japon'  element={<NordicPage />} />
        <Route path='/nordic'  element={<NordicPage />} />
        <Route path='/russie'  element={<NordicPage />} />
        <Route path='/europe'  element={<NordicPage />} />
        <Route path='/pacifique'  element={<NordicPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
