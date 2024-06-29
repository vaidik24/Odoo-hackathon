import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './components/Events';
import Dashboard from './pages/Dashboard';
import About from './components/About';

function App() {

  return (
    <>
     {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/musician/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
