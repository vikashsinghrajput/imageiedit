
import Navbar from "../Navbar";
import Footer from "../Footer";
import Home from "../../Pages/Home/Home";


const Layout = ({children}) => {
  return (
    <>
  
        <Navbar/>
      <Home/>
        <Footer/>

    
    </>
  );
};

export default Layout;
