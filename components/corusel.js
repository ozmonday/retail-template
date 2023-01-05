import React from "react";
import one from "../public/helm/one.avif";
import two from "../public/helm/two.avif";
import three from "../public/helm/three.avif";
import four from "../public/helm/four.avif";
import five from "../public/helm/five.avif";
import arrow_left from "../public/arrow_back_ios_white.svg"
import arrow_right from "../public/arrow_forward_ios_white.svg"
import Image from "next/image";


export function CoruselItem({ state, src }) {
  const content = () => {
    if (state) {
      return (
        <div className="flex flex-col">
          <Image src={src} height={160} width={160} alt={"elm"} />
          <button className="mt-3 p-2 bg-blue-400 font-montserrat font-bold text-sm text-white">SHOP NOW</button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col">
          <Image src={src} height={140} width={140} alt={"elm"} />
        </div>
      );
    }
  };
  return <li className="flex w-full flex-row justify-center">{content()}</li>;
}

class Corusel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [one, two, three, four, five],
      center: 1,
    };

    this.current = 0;
    this.container = React.createRef();

    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.callbackLeft = this.callbackLeft.bind(this);
  }

  componentDidMount() {
    let el = this.container.current;
    el.style.gridTemplateColumns = `repeat(${
      this.state.items.length
    }, calc(100% /${window.innerWidth <= 768 ? 1 : 3}))`;
    el.style.gridTemplateRows = "minmax(0, 1fr)";

    window.addEventListener("resize", () => {
      const content = el.getElementsByTagName("li")[0].clientWidth;
      el.style.gridTemplateColumns = `repeat(${
        this.state.items.length
      }, calc(100% /${window.innerWidth <= 768 ? 1 : 3}))`;
      el.scrollLeft = content * this.current;
    });
  }

  callbackLeft() {
    let el = this.container.current;
    const card = el.getElementsByTagName("li")[0].clientWidth;
    el.scrollLeft = el.scrollLeft + card;
    el.scrollTo({
      left: card * this.current,
      behavior: "smooth",
    });
  }

  leftClick() {
    let item = this.state.items[this.state.items.length - 1];
    let items = this.state.items;

    console.log(this.current);

    if (this.current === 0) {
      items.unshift(item);
      items.pop();
      this.setState({ items: items }, this.callbackLeft);
    } else {
      this.current = this.current - 1 < 0 ? 0 : this.current - 1;
      let center = this.state.center - 1 < 1 ? 1 : this.state.center - 1;
      this.setState({ center: center });
      let el = this.container.current;
      const card = el.getElementsByTagName("li")[0].clientWidth;
      el.scrollTo({
        left: card * this.current,
        behavior: "smooth",
      });
    }
  }

  callbackRight() {
    let el = this.container.current;
    const card = el.getElementsByTagName("li")[0].clientWidth;
    el.scrollLeft = el.scrollLeft - card;

    el.scrollTo({
      left: card * this.current,
      behavior: "smooth",
    });
  }

  rightClick() {
    let item = this.state.items[0];
    let items = this.state.items;

    console.log(this.current);

    if (this.current === 2) {
      items.push(item);
      items.shift();
      this.setState({ items: items }, this.callbackRight);
    } else {
      this.current = this.current + 1 > 2 ? 2 : this.current + 1;
      let center = this.state.center + 1 > 3 ? 3 : this.state.center + 1;
      this.setState({ center: center });

      let el = this.container.current;
      const card = el.getElementsByTagName("li")[0].clientWidth;
      el.scrollTo({
        left: card * this.current,
        behavior: "smooth",
      });
    }
  }

  render() {
    return (
      <div className="flex flex-col bg-purple-700 p-6 md:p-12">
        <p className="text-center text-white font-staatliches text-5xl">Title</p>
        <p className="text-center text-white font-montserrat font-reguller">Discover all colors</p>
        <div className="flex w-full flex-row justify-center my-5">
          <button onClick={this.leftClick}><Image src={arrow_left} alt="left" height={40} width={40}/></button>
          <ul
            ref={this.container}
            className="hidden-scrollbar grid w-8/12 place-items-center overflow-x-scroll"
          >
            {this.state.items.map((v, i) => (
              <CoruselItem key={i} src={v} state={i === this.state.center} />
            ))}
          </ul>
          <button onClick={this.rightClick}><Image src={arrow_right} alt="left" height={40} width={40}/></button>
        </div>
      </div>
    );
  }
}

export default Corusel;