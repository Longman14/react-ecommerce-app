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
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path = "/" element ={<Layout/>}>
       <Route index element = {<Home/>}/>
       <Route path= "about" element ={<About/>}/>
       <Route path= "contact" element ={<Contact/>}/>
       <Route path= "product" element ={<OurStore/>}/>
       <Route path= "product/:id" element ={<SingleProduct/>}/>
       <Route path= "blogs" element ={<Blog/>}/>
       <Route path= "blogs/:id" element ={<SingleBlog/>}/>
       <Route path= "compare-product" element ={<CompareProduct/>}/>
       <Route path= "wishlist" element ={<Wishlist/>}/>
       <Route path= "login" element ={<Login/>}/>
       <Route path= "forgot-password" element ={<ForgotPassword/>}/>
       <Route path= "sign-up" element ={<Signup/>}/>
       <Route path= "reset-password" element ={<ResetPassword/>}/>
       <Route path= "refund-policy" element ={<RefundPolicy/>}/>
       <Route path= "shipping-policy" element ={<ShippingPolicy/>}/>
       <Route path= "terms-and-conditions" element ={<TermsAndConditions/>}/>
       <Route path= "privacy-policy" element ={<PrivacyPolicy/>}/>
      </Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
