import React from "react";
import Layout from "../../components/layout";
import ItemDetail, { BlankItemDetail } from "../../components/item-detail";
import CatalogItem from "../../components/catalog-items";
import axios from "axios";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: undefined,
      items: [
        {
          id: 1,
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          id: 3,
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          id: 7,
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          id: 9,
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          id: 10,
          name: "ini helm",
          price: 100,
          discont: 20,
        },
        {
          id: 12,
          name: "ini helm",
          price: 100,
          discont: 20,
        },
      ],
    };
    this.fetchData =this.fetchData.bind(this);
  }

 

  componentDidMount() {
    this.fetchData(this.props.id);
  }


  async fetchData(id) {
    console.log(id)
    try {
      let response =  await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
      this.setState({product: response})
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Layout>
        {this.state.product != undefined ?  <ItemDetail item={this.state.product} /> : <BlankItemDetail/>}
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

export async function getServerSideProps({params}) {
  return {
    props: {
      id : params.detail,
    }
  }
}

// export async function getStaticProps({ params }) {
//   console.log(params.detail)
//   return {
//     props: {
//       id : params.detail
//     },
//   };
// }


