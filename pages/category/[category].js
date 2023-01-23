import React from "react";
import {Item,  BlankItem } from "../../components/item-card";
import Layout from "../../components/layout";
import Select from "../../components/select";

class Catagory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filter: {
        price: (v) => true,
      },
    };

    this.price = [
      { value: (v) => v < 100, label: "< $100" },
      { value: (v) => v >= 100 && v <= 200, label: "$100 - $200" },
      { value: (v) => v >= 200 && v <= 300, label: "$200 - $300" },
      { value: (v) => v >= 300 && v <= 400, label: "$300 - $400" },
      { value: (v) => v > 400, label: "> $400" },
    ];

    this.fetchData = this.fetchData.bind(this);
    this.valuePrice = this.valuePrice.bind(this);
    this.setupFilter = this.setupFilter.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  valuePrice(filter) {
    this.setState({ filter: { price: filter } }, console.log(filter));
  }

  setupFilter(items) {
    let result = [];
    items.forEach((v) => {
      if (this.state.filter.price(v.price)) {
        result.push(v);
      }
    });
    return result;
  }

  async fetchData() {
    try {
      let response = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      this.setState({ items: response });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Layout>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center bg-red-300">
            <h1 className="my-auto">{this.props.title}</h1>
          </div>
          <div className="my-4 flex flex-row md:mx-16">
            <div className="m-0.5">
              <Select
                value={this.valuePrice}
                options={this.price}
                title="Price"
              />
            </div>
          </div>
          <ul className="grid grid-cols-2 md:mx-16 md:grid-cols-4">
            {this.state.items.length === 0 ? (
              <>
                <BlankItem />
                <BlankItem />
                <BlankItem />
                <BlankItem />
              </>
            ) : (
              this.setupFilter(this.state.items).map((v, i) => (
                <Item
                  key={i}
                  id={v.id}
                  discont={20}
                  name={v.title}
                  price={v.price}
                  picture={v.image}
                />
              ))
            )}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Catagory;

export async function getServerSideProps({ params, req, res }) {
  console.log(req.headers)
  return {
    props: {
      title: params.category,
    },
  };
}
