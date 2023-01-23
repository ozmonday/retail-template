import React from "react";
import Layout from "../../components/layout";
import { ItemDetail, BlankItemDetail } from "../../components/item-detail";
import XSlide from "../../components/x-slider";
import { Item, BlankItem } from "../../components/item-card";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: undefined,
      suggested: [],
      complement: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props.id);
  }

  async fetchData(id) {
    try {
      let response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      ).then((res) => res.json());
      this.setState({ product: response });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Layout>
        {this.state.product != undefined ? (
          <ItemDetail item={this.state.product} />
        ) : (
          <BlankItemDetail />
        )}

        <div className="relative flex flex-col w-full p-3 md:p-5 md:px-20">
          <p className="font-staatliches my-4 text-center text-2xl text-blue-400 md:text-3xl">
            Suggested products
          </p>
          <div className="flex">
          <XSlide>
            <Item id={2} discont={30} name={"hako"} price={34}></Item>
            {/* <BlankItem/> */}

            {/* <BlankItem/>
            <BlankItem/>
            <BlankItem/> */}
            
            {/* {this.state.suggested.length === 0 ? (
              <BlankItem />
            ) : (
              this.state.suggested.map((v, i) => (
                <Item
                  key={i}
                  id={v.id}
                  discont={v.discont}
                  name={v.name}
                  price={v.price}
                />
              ))
            )} */}
          </XSlide>
          </div>
        </div>
        <div className="m-3 flex flex-col bg-white md:m-5 md:mx-20">
          <p className="font-staatliches my-4 text-center text-2xl text-blue-400 md:text-3xl">
            Complete with{" "}
          </p>
          <XSlide> </XSlide>
        </div>
      </Layout>
    );
  }
}

export default Post;

export async function getServerSideProps({ params }) {
  return {
    props: {
      id: params.detail,
    },
  };
}

// export async function getStaticProps({ params }) {
//   console.log(params.detail)
//   return {
//     props: {
//       id : params.detail
//     },
//   };
// }
