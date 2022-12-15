import Link from "next/link";
import Router from "next/router";
import React from "react";
import Layout from "../../components/layout";

class Profile extends React.Component {
  logOut() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    console.log("logout clicked")
    Router.push("/")
  }

  render() {
    return(
      <Layout>
        <div>
          <div>Profile</div>
          <Link href="/auth/signin">signin</Link>
          <button onClick={this.logOut}>Logout</button>
        </div>
      </Layout>
    )
  }
}

export default Profile;

