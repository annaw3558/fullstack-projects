import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import { Context } from "./context/Context"
import { useContext } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/register' element={user ? <Home/> : <Register/>}/>
        <Route path='/login' element={user ? <Home/>: <Login/>}/>
        <Route path='/write' element={user ? <Write/> : <Login/>}/>
        <Route path='/settings' element={user ? <Settings/> : <Login/>}/>
        <Route path='/post/:postid' element={<Single/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
