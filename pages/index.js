import Head from "next/head";
import React from "react";
import {AdvertiseSessionOne, AdvertiseSessionTwo} from "../components/adevertise";
import Jumbotron from "../components/jumbotron";
import Corusel from "../components/corusel";
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
        <div className="flex flex-col">
          <Jumbotron/>
          <SpecialItems title="Must Have"/>
          <AdvertiseSessionOne/>
          <SpecialItems title="Must Have"/>
          <Corusel />
          <AdvertiseSessionTwo/>
        </div>
      </Layout>
    );
  }
}

export default Home;
