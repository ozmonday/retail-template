import Image from "next/image";
import React, { useEffect, useReducer} from "react";
import ind from "../public/indonesia-flag-wrinkled-dark-background-3d-render.jpg";
import jbt from "../public/2201_w030_n002_291b_p1_291.jpg";
import left from "../public/chevron_left_black.svg";
import right from "../public/chevron_right_black.svg";


export default function Jumbotron({}) {
  let items = [
    {
      src: jbt,
      title: "one",
    },
    {
      src: ind,
      title: "two",
    },
    {
      src: jbt,
      title: "two",
    },
    {
      src: ind,
      title: "two",
    },
  ];


  const init = {index: 0}


  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {index: state.index + 1};
      case 'decrement':
        return {index: state.index - 1};
      case 'custom' :
        return {index: action.value}
      default:
        throw new Error();
    }
  }
 
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    let con = document.getElementById("jumbotron");
    con.scrollTo({
      left: document.body.clientWidth * state.index,
      behavior: "smooth",
    });

    window.addEventListener("resize", () => {
      con.scrollLeft = document.body.clientWidth * state.index;
    });
  }, [state]);

  return (
    <div className="relative flex flex-col bg-white">
      <div id="jumbotron" className="hidden-scrollbar flex w-full flex-row overflow-y-auto">
        {items.map((e, i) => (
          <Image key={i} src={e.src} width="100%" height="auto" alt={e.title} />
        ))}
      </div>
      <div className="absolute flex h-full w-full flex-col justify-center">
        <div className="flex w-full flex-row justify-between">
          <button
            disabled={state.index === 0}
            onClick={() => dispatch({type: "decrement"})}
            className=" bg-gray-400 opacity-75 p-2"
          >
            <Image src={left} alt="left" height={25} width={25}/>
          </button>
          <button
            disabled={state.index === items.length - 1}
            onClick={() => dispatch({type: "increment"})}
            className=" bg-gray-400 opacity-75 p-2"
          >
            <Image src={right} alt="right" height={25} width={25}/>
          </button>
        </div>
        <div className="absolute bottom-0 mb-3 flex w-full flex-row justify-center">
          {items.map((e, i) => (
            <button
              key={i}
              onClick={() => dispatch({type: "custom", value: i})}
              className={`m-1 h-2 w-2 ${
                state.index === i ? "bg-gray-500" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


// class Jumbotron extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0,
//       items: [
//         {
//           src: jbt,
//           title: "one",
//         },
//         {
//           src: ind,
//           title: "two",
//         },
//         {
//           src: jbt,
//           title: "two",
//         },
//         {
//           src: ind,
//           title: "two",
//         },
//       ],
//     };
 
//   }

//   componentDidMount() {
//     let con = document.getElementById("jumbotron");
//     window.addEventListener("resize", () => {
//       con.scrollLeft = window.innerWidth * this.state.index;
//     });



//     console.log("mount")
//   }


//   componentDidUpdate() {
//     let con = document.getElementById("jumbotron");
//     con.scrollTo({
//       left: window.innerWidth * this.state.index,
//       behavior: "smooth",
//     });
//   }

//   render() {
//     return (
//       <div className="relative flex flex-col bg-white">
//         <div id="jumbotron" className="flex w-screen flex-row overflow-y-auto">
//           {this.state.items.map((e, i) => (
//             <Image
//               key={i}
//               src={e.src}
//               width="100%"
//               height="auto"
//               alt={e.title}
//             />
//           ))}
//         </div>
//         <div className="absolute flex h-full w-full flex-col justify-center">
//           <div className="flex w-full flex-row justify-between">
//             <button
//               disabled={this.state.index === 0}
//               onClick={() => this.setState({ index: this.state.index - 1 })}
//               className="bg-red m-2 p-3"
//             >
//               left
//             </button>
//             <button
//               disabled={this.state.index === this.state.items.length - 1}
//               onClick={() => this.setState({ index: this.state.index + 1 })}
//               className="bg-red m-2 p-3"
//             >
//               right
//             </button>
//           </div>
//           <div className="absolute bottom-0 mb-3 flex w-full flex-row justify-center">
//             {this.state.items.map((e, i) => (
//               <button
//                 key={i}
//                 onClick={() => this.setState({ index: i })}
//                 className={`m-1 h-2 w-2 ${
//                   this.state.index === i ? "bg-gray-500" : "bg-white"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Jumbotron;
