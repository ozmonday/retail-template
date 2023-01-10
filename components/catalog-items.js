import Item from "./card-item";
import React from "react";
import Image from "next/image";
import left from "../public/chevron_left_black.svg";
import right from "../public/chevron_right_black.svg";

class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      items: props.items,
      nav: false,
    };

    this.container = React.createRef();
    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
  }

  componentDidMount() {
    let el = this.container.current;
    const div = window.innerWidth <= 768 ? 2 : 4;

    el.style.gridTemplateColumns = `repeat(${this.state.items.length}, calc(100% /${div}))`;
    el.style.gridTemplateRows = "minmax(0, 1fr)";

    window.addEventListener("resize", () => {
      const card = el.getElementsByTagName("li")[0].clientWidth;
      const div = window.innerWidth <= 768 ? 2 : 4;

      el.style.gridTemplateColumns = `repeat(${
        this.state.items.length
      }, calc(100% /${window.innerWidth <= 768 ? 2 : 4}))`;
      el.scrollLeft = card * this.state.index;

      if (this.state.items.length > div) {
        console.log("more");
        this.setState({ nav: true });
      } else {
        this.setState({ nav: false });
      }
    });

    if (this.state.items.length > div) {
      this.setState({ nav: true });
    } else {
      this.setState({ nav: false });
    }
  }

  componentDidUpdate() {
    let el = this.container.current;
    const card = el.getElementsByTagName("li")[0].clientWidth;
    el.scrollTo({
      left: card * this.state.index,
      behavior: "smooth",
    });
  }

  rightClick() {
    let el = this.container.current;
    const card = el.getElementsByTagName("li")[0].clientWidth;
    const dividen = Math.round(el.clientWidth / card);
    if (
      dividen * card + card * this.state.index <
      this.state.items.length * card
    ) {
      this.setState({ index: this.state.index + 1 });
    }
  }

  leftClick() {
    if (this.state.index !== 0) {
      this.setState({ index: this.state.index - 1 });
    }
  }

  render() {
    return (
      <div className="flex w-full flex-row justify-center">
        <div
          className={`${
            this.state.nav ? "flex" : "hidden"
          } flex-col justify-center`}
        >
          <button
            className="bg-gray-400 p-2 opacity-75"
            onClick={this.leftClick}
          >
            <Image alt="left" src={left} height={20} width={20} />
          </button>
        </div>
        <ul
          ref={this.container}
          className="hidden-scrollbar grid w-full overflow-x-scroll"
        >
          {this.state.items.map((v, i) => (
            <Item key={i} id={v.id} discont={v.discont} name={v.name} price={v.price} />
          ))}
        </ul>
        <div
          className={`${
            this.state.nav ? "flex" : "hidden"
          } flex-col justify-center`}
        >
          <button
            className="bg-gray-400 p-2 opacity-75"
            onClick={this.rightClick}
          >
            <Image alt="right" src={right} height={20} width={20} />
          </button>
        </div>
      </div>
    );
  }
}

export default CatalogItem;
