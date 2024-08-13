import './App.css';
import Layout from "./components/Layout.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

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
       <Route path= "blogs" element ={<Blog/>}/>
       <Route path= "compare-product" element ={<CompareProduct/>}/>
       <Route path= "wishlist" element ={<Wishlist/>}/>
       <Route path= "login" element ={<Login/>}/>
       <Route path= "forgot-password" element ={<ForgotPassword/>}/>
      </Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
