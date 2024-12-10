
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import NewsLetter from "./components/Newsletter/NewsLetter.jsx";
import {Outlet} from 'react-router-dom'
import SearchBar from './components/SearchBar.jsx';


const Root = () => {
  return (
    <>
    <Header/>
    <SearchBar/>
    <Outlet/>
    <NewsLetter/>
    <Footer/>
    </>

  )
}

export default Root;