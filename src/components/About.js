import React from 'react'
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <UserContext.Consumer>
            {(user)=> (
                <h4> {user.name} </h4>
            )}
        </UserContext.Consumer>
        <p>I am making online food ordering application</p>
    </div>
  )
}

export default About;
