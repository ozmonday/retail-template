import Head from "next/head";
import React from "react";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import SpecialItems from "../components/special-tems";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //let res = getCookie("token")
    //console.log(res)
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>
            retail store
          </title>
        </Head>
        <div className="my-3 flex flex-col">
          <Jumbotron/>
          <SpecialItems title="Must Have"/>
          <SpecialItems title="Must Have"/>
        </div>
      </Layout>
    );
  }
}

export default Home;
