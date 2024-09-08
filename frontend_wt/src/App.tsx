/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import "./App.css";
import { Carousel } from "./components/carousel/carousel";

export enum Direction {
  LTR = "ltr",
  RTL = "rtl",
}

function App() {
  const [dir, setDir] = useState<Direction>(Direction.LTR);

  const toggleDir = () => {
    setDir(dir === Direction.LTR ? Direction.RTL : Direction.LTR);
  }

  const scrollRef = useRef<any>(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Görgetés balra egy kártyányit (300px)
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Görgetés jobbra egy kártyányit (300px)
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="wrapper">
        <button onClick={scrollLeft} className="btn btn-primary">
          Vissza
        </button>
        <button onClick={scrollRight} className="btn btn-primary">
          Előre
        </button>
        <Carousel scrollRef={scrollRef} dir={dir} />
      </div>
      <div className="change-language mt-5">
        <button className="btn btn-primary rounded-pill" onClick={toggleDir} >Change Language</button>
      </div>
    </>
  );
}

export default App;
