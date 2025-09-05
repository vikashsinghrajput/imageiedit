import {
  Route,
  Routes,
} from "react-router-dom";

import Solutions from "../screens/solutions/solutions";
import TryYourself from "../screens/try-yourself/TryYourself";
import Pricing from "../screens/Pricing/Pricing";
import Navbar from "../Navbar";
import Home from "../../Pages/Home/Home";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route  path="/solutions" element={<Solutions />} />
          <Route path="/try-yourself" element={<TryYourself />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
