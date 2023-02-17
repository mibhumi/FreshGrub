import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {

    const user = useContext(UserContext);

    return <div className="footer">
    <h4>&copy; 2023 FreshGrub | All rights reserved</h4>
    {/* <p> Developed by {user.name} and email is {user.email}</p> */}
    </div>;
  };
  
  export default Footer;
  