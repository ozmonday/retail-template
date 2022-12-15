import Router from "next/router";
import React from "react";
import Layout from "../../components/layout";
import Login from "../../components/login";
import { getCookie } from "../../utils/utils";
getCookie
class SignIn extends React.Component {
  constructor(props) {
    super(props) 

    this.getCookie = getCookie.bind(this) 
  }

  componentDidMount() {
    if (this.getCookie("token") == "user") {
      Router.push("/dashboard/profile")
    }
  }

  render() {
    return (
      <Layout>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <div className="hidden md:flex">
            regiter
          </div>
          <Login/>
        </div>
      </div>
      </Layout>
    )
  }
}

export default SignIn;