import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import AboutPage from './Pages/AboutPage';
import AdminLogin from './Admin/AdminPages/AdminLogin';
import AdminHomePage from './Admin/AdminPages/AdminHomePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/about' element={<AboutPage/>} />



        {/* admin side */}

        <Route path='/magicAdmin' element= {<AdminLogin/>} />
        <Route path='/adminHome' element={<AdminHomePage/>} />

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
