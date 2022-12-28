import React from "react";
import Item from "./card-item";

export function Catalog({ title, func }) {
  return (
    <li className="m-2 flex flex-col">
      <button onClick={() => func()}>{title}</button>
      <hr />
    </li>
  );
}

class SpecialItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      catalogs: ["satu", "dua", "tiga"],
    };
  }
  render() {
    return (
      <div className="flex w-screen flex-col">
        <p className="text-center">{this.props.title}</p>
        <ul className="flex flex-row justify-center">
          {this.state.catalogs.map((v, i) => (
            <Catalog
              key={i}
              state={i}
              title={v}
              func={() => this.setState({ current: i })}
            />
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-10 p-5 md:grid-cols-4 md:px-10">
          <Item discont={30} name="Helm Mahal" price={30}/>
          <Item />
          <div className="bg-gray-700">satu</div>
          <div className="bg-gray-700">satu</div>
          <div className="bg-gray-700">satu</div>
          <div className="bg-gray-700">satu</div>
          <div className="bg-gray-700">satu</div>
        </div>
      </div>
    );
  }
}

export default SpecialItems;
