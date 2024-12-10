


import Register from './pages/Register'
import './index.css'
import {  Route,  Routes } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Login from './pages/Login.jsx'
import Product from './pages/Productt.jsx'
import ProductItem from './components/ProductItem'
import Placeorder from './pages/Placeorder/Placeorder'
import Collection from './pages/Collection/Collection.jsx';
// import Root from './root.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import NewsLetter from "./components/Newsletter/NewsLetter.jsx";
import SearchBar from './components/SearchBar.jsx';
const App =()=>{
  return(
    <div >
      <ToastContainer/>
      <Header/>
    <SearchBar/>
      <Routes>
      {/* <Route path='/' element={<Root/>}> */}
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/register' element={<Register/>} /> 
      <Route path='/login' element={<Login/>} /> 
      <Route path='/placeorder' element={<Placeorder/>} />
      <Route path='/productItem' element={<ProductItem/>} />
      <Route path='/product/:productId' element={<Product/>} />
      {/* </Route> */}
    </Routes>
    <NewsLetter/>
    <Footer/>
   </div>
  )
}

export default App