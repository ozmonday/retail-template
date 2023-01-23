import React from "react";
import Image from "next/image";
import left from "../public/chevron_left_black.svg";
import right from "../public/chevron_right_black.svg";

class XSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      card: 0,
      nav: false,
    };

    this.container = React.createRef();
    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.navCallback = this.navCallback.bind(this);
  }

  componentDidMount() {
    const el = this.container.current;
    const card = el.getElementsByTagName("li").length  === 0 ? 0 : el.getElementsByTagName("li")[0].clientWidth;
    console.log(card)
    const div = window.innerWidth <= 768 ? 2 : 4;
    el.style.gridTemplateColumns = `repeat(${this.props.children.length}, calc(100% /${div}))`;
    el.style.gridTemplateRows = "minmax(0, 1fr)";

    window.addEventListener("resize", () => {
      const card = el.getElementsByTagName("li").length  === 0 ? 0 : el.getElementsByTagName("li")[0].clientWidth;
      const div = window.innerWidth <= 768 ? 2 : 4;
      el.style.gridTemplateColumns = `repeat(${this.props.children.length}, calc(100% /${
        window.innerWidth <= 768 ? 2 : 4
      }))`;
      el.scrollLeft = card * this.state.index;

      this.setState({ nav: this.props.children.length > div ? true : false, card: card });
    });

    this.setState({ nav: this.props.children.length > div ? true : false, card : card});
  }

  navCallback() {
    const el = this.container.current;
    el.scrollTo({
      left: this.state.card * this.state.index,
      behavior: "smooth",
    });
  }

  rightClick() {
    const el = this.container.current;
    const div = Math.round(el.clientWidth / this.state.card);

    if (div * this.state.card + this.state.card * this.state.index < this.props.children.length * this.state.card) {
      this.setState({ index: this.state.index + 1 }, this.navCallback);
    }
  }

  leftClick() {
    if (this.state.index !== 0) {
      this.setState({ index: this.state.index - 1 }, this.navCallback);
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
          {this.props.children}
         
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

export default XSlide;
