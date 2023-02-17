import { createContext, useContext } from 'react';

const UserContext = createContext({
    name: "Bhumi",
    email: "bhumipatel1196@gmail.com"
});

UserContext.displayName = "UserContext";

export default UserContext;