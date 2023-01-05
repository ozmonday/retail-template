import Router from "next/router";
import React from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import ItemDetail from "../../components/item-detail";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Layout>
        {/* <p>{Router.query.detail}</p> */}
        <ItemDetail/>
        <div className="bg-red-400 m-3 md:m-5">
          suget product
        </div>
        <div className="bg-red-400 m-3 md:m-5">
          suget product
        </div>
      </Layout>
    );
  }
}

export default Post;
