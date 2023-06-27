// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Navbar from './Components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AddAdmin from './Components/AddAdmin';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route exact path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/addAdmin" element={<AddAdmin/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login';
import Home from './Components/Home';
import CustomNavbar from './Components/Partial/Navbar';
import AddAdmin from './Components/Admin/AddAdmin';
import ShowAdmins from './Components/Admin/ShowAdmins';
import ShowAdmin from './Components/Admin/ShowAdmin';
import AddUser from './Components/User/AddUser';
import ShowUsers from './Components/User/ShowUsers';
import ShowUser from './Components/User/ShowUser';
import AddEvent from './Components/Event/AddEvent';
import ShowEvents from './Components/Event/ShowEvents';
import ShowEvent from './Components/Event/ShowEvent';
import NotFound404 from './Components/NotFound404'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the authentication API functions
import { checkAuth } from './API/api'; 


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      const isAuthenticated = await checkAuth();
      setIsAuthenticated(isAuthenticated);
      setLoading(false);
    };

    fetchAuthStatus();
  }, []);

  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={isAuthenticated ? <Home /> : <Login />} />
        {/* <Route path="/about" element={isAuthenticated ? <About /> : <Login />} /> */}
        {/* <Route path="/contact" element={true ? <Contact /> : <Login />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/addAdmin" element={<AddAdmin/>} />
        <Route path="/showAdmins" element={<ShowAdmins/>} />
        <Route path="/showAdmin" element={<ShowAdmin/>} />
        <Route path="/addEvent" element={<AddEvent/>} />
        <Route path="/showEvents" element={<ShowEvents/>} />
        <Route path="/showEvent" element={<ShowEvent/>} />
        <Route path="/addUser" element={<AddUser/>} />
        <Route path="/showUsers" element={<ShowUsers/>} />
        <Route path="/showUser" element={<ShowUser/>} />
        <Route path="*" element={<NotFound404 />} /> {/* Add the 404 route */}
      </Routes>
    </Router>
  );
};

export default App;
