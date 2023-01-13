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
      </div>
    );
  };
  
  export default Header;