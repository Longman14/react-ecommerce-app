import './App.css';
import Layout from "./components/Layout.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path = "/" element ={<Layout/>}>
       <Route index element = {<Home/>}/>
       <Route path= "about" element ={<About/>}/>
       <Route path= "contact" element ={<Contact/>}/>
       <Route path= "store" element ={<OurStore/>}/>
      </Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
