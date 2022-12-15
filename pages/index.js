import React from "react";
import Layout from "../components/layout";
import { getCookie } from "../utils/utils";
class Home extends React.Component {
  constructor(props) {
    super(props)

  }


  componentDidMount() {
    //let res = getCookie("token")
    //console.log(res)
  }

  render() {
    return (
      <Layout>
        <div>Home</div>
      </Layout>
    )
  }
}

export default Home;