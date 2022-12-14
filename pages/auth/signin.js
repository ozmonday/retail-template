import React from "react";
import Login from "../../components/Login";

class SignIn extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <div className="hidden md:flex">
            regiter
          </div>
          <Login/>
        </div>
      </div>
    )
  }
}

export default SignIn;