import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import less from "../public/expand_less.svg";
import more from "../public/expand_more.svg";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppear: false,
      selected: "-",
    };

    this.inputRef = React.createRef();
    this.optionsRef = React.createRef();
    this.optionClick = this.optionClick.bind(this);
  }

  componentDidMount() {
    let width = this.optionsRef.current.clientWidth;
    this.inputRef.current.style.width = `${width}px`;
    this.inputRef.current.value = this.state.selected;
  }

  optionClick(index) {
    this.setState(
      {
        isAppear: false,
        selected: this.props.options[index].label,
      },
      () => {
        this.inputRef.current.value = this.state.selected;
        this.props.value(this.props.options[index].value);
      }
    );
  }

  render() {
    return (
      <div className="relative">
        <div
          className="flex flex-row border border-blue-400 bg-white"
          onClick={() => this.setState({ isAppear: !this.state.isAppear })}
        >
          <input
            ref={this.inputRef}
            type="text"
            readOnly={true}
            className={`${
              this.state.isAppear ? "cursor-text" : "cursor-pointer"
            } px-1.5 py-1`}
          />
          <div className="py-auto my-1 flex flex-col justify-center border-l">
            <Image
              src={this.state.isAppear ? less : more}
              alt="expand"
              height={20}
              width={20}
              className="mx-2"
            />
          </div>
        </div>
        <div
          ref={this.optionsRef}
          className={`absolute ${
            this.state.isAppear ? "flex" : "h-0"
          } left-0 z-30 my-1  flex-col overflow-hidden bg-white`}
        >
          {this.props.options.map((v, i) => (
            <option
              className="p-2"
              key={i}
              onClick={() => this.optionClick(i)}
            >
              {v.label}
            </option>
          ))}
        </div>
      </div>
    );
  }
}

export default Select;
