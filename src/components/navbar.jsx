import { createSignal } from "solid-js";
import norwoodLogo from "../assets/pictures/NA-nobackground.png";

import "./navbar.css";

export default function Navbar(props) {
  const { navigate } = props;
  // 1. Create a signal to track if the menu is open
  const [isOpen, setIsOpen] = createSignal(false);
  
  const handleNav = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    // 2. Close the menu when a link is clicked
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen());
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand py-2" onClick={() => handleNav("/nalobby")} style={{ cursor: "pointer" }}>
          <img src={norwoodLogo} class="na-logo-nav" alt="Norwood Associates logo" />
        </a>
        
        {/* 3. Manually toggle the signal on click */}
        <button 
          class="navbar-toggler nav-menu" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isOpen()}
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* 4. Use Solid's classList to conditionally add the 'show' class */}
        <div 
          class="collapse navbar-collapse" 
          id="navbarNav" 
          classList={{ 'show': isOpen() }}
        >
          <div class="navbar-nav">
            <a class="nav-link" onClick={() => handleNav("/nalobby")} style={{ cursor: "pointer" }}>Home</a>
            <a class="nav-link" onClick={() => handleNav("/services")} style={{ cursor: "pointer" }}>Services</a>
            <a class="nav-link" onClick={() => handleNav("/clients")} style={{ cursor: "pointer" }}>Clients</a>
            <a class="nav-link" onClick={() => handleNav("/insights")} style={{ cursor: "pointer" }}>Insights</a>
            <a class="nav-link" onClick={() => handleNav("/team")} style={{ cursor: "pointer" }}>Team</a>
            <a class="nav-link" href="https://www.linkedin.com/company/norwood-associates/" target="_blank"><i class="bi bi-linkedin"></i></a>
            <a class="nav-link" href="mailto:info@nalobby.net"><i class="bi bi-envelope-fill"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
}