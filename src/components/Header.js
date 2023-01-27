import { useState } from "react";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Title = () => (
    <a href="/" className="imageContainer">
      <img
        className="logo"
        alt="logo"
        src={require("../images/logo.jpeg")}
      />
    </a>
  );
  
  const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <div className="header">
        <Title />
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    );
  };
  
  export default Header;