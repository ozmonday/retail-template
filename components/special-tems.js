import React, { useEffect, useState } from "react";
import Item from "./card-item";
import CatalogItem from "./catalog-items";

export function Catalog({state, current, title, func }) {
  return (
    <li className="m-2 flex flex-col">
      <button onClick={() => func()}>
       <p className="text-lg font-bold font-sans">{title.toUpperCase()}</p>
      </button>
      <hr className={`catalog-line ${current == state ?"bg-black" : undefined}`} />
    </li>
  );
}

class SpecialItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      catalogs: [
        {
          name: "satu",
          items: [
            {
              name: "ini helm",
              price: 100,
              discont: 20,
            },
            {
              name: "ini saya",
              price: 100,
              discont: 20,
            },
          ],
        },
        {
          name: "dua",
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
        },
        {
          name: "tiga",
          items: [
            {
              name: "ini helm",
              price: 100,
              discont: 20,
            },
          ],
        },
      ],
    };

    this.items = this.state.catalogs.map((v, i) => <CatalogItem key={i} items={v.items} />)
  }

  render() {
    let items = [
      this.state.catalogs.map((v, i) => (
        <CatalogItem key={i} items={v.items} />
      ))
    ];
    return (
      <div className="relative flex w-full flex-col">
        <p className="text-center font-sans text-3xl">{this.props.title.toUpperCase()}</p>
        <ul className="flex flex-row justify-center">
          {this.state.catalogs.map((v, i) => (
            <Catalog
              key={i}
              title={v.name}
              current={this.state.current}
              state={i}
              func={() => this.setState({ current: i })}
            />
          ))}
        </ul>
        {this.items[this.state.current]}
      </div>
    );
  }
}

export default SpecialItems;
