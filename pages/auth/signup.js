import React from "react";
import Input from "../../components/input";
import Layout from "../../components/layout";

class SignUp extends React.Component {
  render() {
    return (
      <Layout>
        <div className="my-3 flex flex-col bg-white p-14 md:p-12">
          <p>YOU ALMOST DONE</p>
          <hr/>
          <p>we just need a little more information from you to complite your regisration</p>
          <Input title="Email"/>
          <Input title="Country"/>
          <Input title="ZIP code"/>
          <Input title="Password"/>
        </div>
      </Layout>
    )
  }
}


export default SignUp;