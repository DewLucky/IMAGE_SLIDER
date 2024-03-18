import { useState } from "react";
import "./App.css";
import { images } from "./utils/constants";

function App() {
  const [index, setIndex] = useState(0);

  function slideLeft(){
    setIndex((index)=> (index == 0)? images.length-1: index-1);
  }

  function slideRight(){
    setIndex((index)=> (index == images.length-1)? 0: index+1);
  }
 
  return (
    <>
      <div className="carousel">
        <div className="img-wrapper">
          <h2>Image {index + 1}</h2>
          <img
            className="sliding-img"
            alt="Image List item"
            src={images[index].path}
          />
        </div>
      </div>
      <button id="slide-left" onClick={slideLeft}>left</button>
      <button id="slide-right" onClick={slideRight}>right</button>
    </>
  );
}

export default App;
