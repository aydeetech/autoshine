import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import React from "react";
const Homepage = React.lazy(() => import("./pages/Homepage"));
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Servicepage from "./pages/Servicepage";
import Errorpage from "./pages/Errorpage";
import "./App.css";
import CarProfile from "./pages/Auth/CarProfile";
import Technician from "./pages/Technician";
import Loader from "./components/Loader/Loader";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/Contactpage";
import Settings from "./pages/Settings";
import { Private } from "./pages/private/Private";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route index path="/" element={<Homepage />} />
              <Route path="/service" element={<Servicepage />} />
              <Route path="/technician" element={<Technician />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route element={<Private />}>
                <Route path="/settings" element={<Settings />} />
                <Route path="/booking" element={<Booking />} />
                {/* <Route path="/carprofile" element={<CarProfile />} /> */}
              </Route>
            </Route>
            
            <Route element={<Private />}>
              <Route path="/carprofile" element={<CarProfile />} />
            </Route>

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
};

export default App;
