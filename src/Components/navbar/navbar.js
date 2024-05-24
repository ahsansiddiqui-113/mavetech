import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from '../navbar/home.js';
import Overview from '../Overview/Overview.js';
import Methodology from '../Methodology/Methodology.js';
import Offerings from '../Offerings/Offering.js';
import CredentialingPage from '../services/credentials.js'

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    services: false,
    benefits: false,
    clients: false,
    resources: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === dropdown ? !prev[key] : false;
        return acc;
      }, {}),
    }));
  };

  const location = useLocation();

  useEffect(() => {
    setDropdowns({
      services: false,
      benefits: false,
      clients: false,
      resources: false,
    });
  }, [location]);

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={require("../../assets/IT.png")} alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.ul}>
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/overview">Overview</NavItem>
        {/* <div className="dropdown-content">
            <a href="/overview">Solution 1</a>
            <a href="/overview">Solution 2</a>
            <a href="/overview">Solution 3</a>
        </div> */}
        <NavItem to="/methodology">Methodology</NavItem>
        <NavItem to="/offerings">Offerings</NavItem>
        <NavItem to="/credentials">Credentials</NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ to, children }) => (
  <li style={styles.li}>
    <Link to={to} style={styles.link}>
      {children}
    </Link>
  </li>
);

const App = () => (
  <Router>
    <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/credentials" element={<CredentialingPage />} />
      </Routes>
    </main>
  </Router>
);

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#000000',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  // dropdown: {
  //   display: none,
  //   position: absolute,
  //   backgroundColor: '#f9f9f9',
  //   width: '200px',
  //   boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  //   Index: 1,
  // },

  li: {
    margin: '0 15px',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  logoContainer: {
    borderRadius: '50%',
    padding: '5px',
  },
  logo: {
    maxWidth: '50px',
    height: 'auto',
    borderRadius: '50%',
  },
};

export default App;

