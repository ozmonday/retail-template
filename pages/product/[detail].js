import Router from "next/router";
import React from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import ItemDetail from "../../components/item-detail";
import CatalogItem from "../../components/catalog-items";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          name: "ini helm",
          price: 100,
          discont: 20,
        },
      ],
    };
  }

  render() {
    return (
      <Layout>
        <ItemDetail />
        <div className="m-3 flex flex-col bg-white md:m-5 md:mx-20">
          <p className="text-center my-4 font-staatliches text-2xl md:text-3xl text-blue-400">Suggested products</p>
          <CatalogItem items={this.state.items} />
        </div>
        <div className="m-3 flex flex-col bg-white md:m-5 md:mx-20">
          <p className="text-center my-4 font-staatliches text-2xl md:text-3xl text-blue-400">Complete with </p>
          <CatalogItem items={this.state.items} />
        </div>
      </Layout>
    );
  }
}

export default Post;
