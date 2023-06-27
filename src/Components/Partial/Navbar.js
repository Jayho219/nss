// import React from 'react';
// import { Link } from 'react-router-dom';


// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAdminDropdownToggle = () => {
    setIsAdminDropdownOpen(!isAdminDropdownOpen);
  };

  const handleAdminDropdownClose = () => {
    setIsAdminDropdownOpen(false);
  };

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleUserDropdownClose = () => {
    setIsUserDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsAdminDropdownOpen(false);
  };

  return (
    <Navbar>

      <NavLink to="/" className="nav-link" >
        <img alt="logo" src="logo_new.png" style={{ maxHeight: '70px' }} />
      </NavLink>

      <Nav>
        <ul className="d-flex list-unstyled" style={{ justifyContent: 'flex-end', paddingRight: '20px' }}>
          
          <li className="nav-item" style={{ paddingRight: '10px' }}>
            <NavLink  to="/" className="nav-link" >Home</NavLink>
          </li>

          <li className="nav-item">
            <NavDropdown title="Admin" id="basic-nav-dropdown" className="nav-link" 
              show = {isAdminDropdownOpen}
              onMouseEnter={handleAdminDropdownToggle}
              onMouseLeave={handleAdminDropdownClose}
            >
              <NavDropdown.Item as={NavLink} to="/showAdmins">Show Admins</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/addAdmin">Add Admin</NavDropdown.Item>
            </NavDropdown>
          </li>

          <li className="nav-item">
            <NavDropdown title="User" id="basic-nav-dropdown" className="nav-link" 
              show = {isUserDropdownOpen}
              onMouseEnter={handleUserDropdownToggle}
              onMouseLeave={handleUserDropdownClose}
            >
              <NavDropdown.Item as={NavLink} to="/showUsers">Show Users</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/addUser">Add User</NavDropdown.Item>
            </NavDropdown>
          </li>

          <li className="nav-item">
            <NavDropdown title="Event" id="basic-nav-dropdown" className="nav-link"
              show={isDropdownOpen}
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownClose}
            >
              <NavDropdown.Item as={NavLink} to="/showEvents" >Show Events</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/addEvent" >Add Event</NavDropdown.Item>
            </NavDropdown>
          </li>

        </ul>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;







// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { NavDropdown, Container, Navbar, Nav } from 'react-bootstrap';

// function CustomNavbar() {
//   return (
//     <Navbar bg="light" expand="lg" className="p-2">
//       <Container>
//         <Navbar.Brand as={NavLink} to="/">
//           <img alt="logo" src="logo_new.png" style={{ maxHeight: '70px' }} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />

//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto d-flex">
//             <Nav.Item>
//               <Nav.Link as={NavLink} exact to="/" activeClassName="active">
//                 Home
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link as={NavLink} to="/about" activeClassName="active">
//                 About
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link as={NavLink} to="/contact" activeClassName="active">
//                 Contact
//               </Nav.Link>
//             </Nav.Item>
//             <NavDropdown title="Event" id="basic-nav-dropdown">
//               <NavDropdown.Item as={NavLink} to="/CurrentEvent" activeClassName="active">
//                 Current Event
//               </NavDropdown.Item>
//               <NavDropdown.Item as={NavLink} to="/PastEvent" activeClassName="active">
//                 Past Event
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;
