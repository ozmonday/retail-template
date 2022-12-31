import Item from "./card-item";
import React from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      items: props.items,
      nav: false
    };

    this.container = React.createRef();

    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
  }

  componentDidMount() {
    console.log(this.state.items.length)
    let el = this.container.current;
    const div = window.innerWidth <= 768 ? 1 : 4;
  

    el.style.gridTemplateColumns = `repeat(${
      this.state.items.length
    }, calc(100% /${div}))`;
    el.style.gridTemplateRows = "minmax(0, 1fr)";

    window.addEventListener("resize", () => {
      const card = el.getElementsByTagName("li")[0].clientWidth;
      const div = window.innerWidth <= 768 ? 1 : 4;

      el.style.gridTemplateColumns = `repeat(${
        this.state.items.length
      }, calc(100% /${window.innerWidth <= 768 ? 1 : 4}))`;
      el.scrollLeft = card * this.state.index;

      if (this.state.items.length > div) {
        console.log("more")
        this.setState({nav: true})
      } else {
        this.setState({nav: false})
      }
    });

    if (this.state.items.length > div) {
      this.setState({nav: true})
    } else {
      this.setState({nav: false})
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
      <div className="flex flex-row justify-center w-full">
        <div className={`${this.state.nav ? "flex" : "hidden"} flex-col justify-center`}>
          <button className="bg-gray-400 opacity-75 p-2" onClick={this.leftClick}>
            <Icon path={mdiChevronLeft} title="left" size={1} color="white" />
          </button>
        </div>
        <ul
          ref={this.container}
          className="special-items grid overflow-x-scroll w-3/4"
        >
          {this.state.items.map((v, i) => (
            <Item key={i} discont={v.discont} name={v.name} price={v.price} />
          ))}
        </ul>
        <div className={`${this.state.nav ? "flex" : "hidden"} flex-col justify-center`}>
          <button className="bg-gray-400 opacity-75 p-2" onClick={this.rightClick}>
          <Icon path={mdiChevronRight} title="left" size={1} color="white" />
          </button>
        </div>
      </div>
    );
  }
}

export default CatalogItem;
