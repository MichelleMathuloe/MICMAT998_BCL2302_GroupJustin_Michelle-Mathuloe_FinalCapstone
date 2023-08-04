import React from "react"


export default function NavBar({ handleHomeButtonClick }) {
  const [showNavContainer, setShowNavContainer] = React.useState(false);
  
  const handleMouseLeave = () => {
    setShowNavContainer(false);
  };

  const handleMouseEnter = () => {
    setShowNavContainer(true);
  };

  const handleHomeButtonClickInternal = () => {
    handleHomeButtonClick();
  };

  return (
    <nav className="nav-cast" onMouseLeave={handleMouseLeave}>
      <div className="title-btn" onMouseEnter={handleMouseEnter}>
        
      </div>
      {showNavContainer && (
        <div className="navContainer">
          <button className="btn-medium"></button>
          <button className="btn-nav" onClick={handleHomeButtonClickInternal}>
            Home
          </button>
          
        </div>
      )}
    </nav>
  );
}

