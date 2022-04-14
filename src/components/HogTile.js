import { useState } from "react";
import HogDetails from "./HogDetails";

function HogTile({ hog }) {
  const [visibleDetails, setVisibleDetails] = useState(false);

  function handleClick() {
    setVisibleDetails(!visibleDetails);
  }

  return (
    <div>
      <h1 id="name">{hog.name}</h1>
      <img
        id="img"
        onClick={handleClick}
        height="200"
        width="200"
        src={hog.image}
        alt="hog"
      ></img>
      {visibleDetails ? <HogDetails hog={hog} /> : ""}
    </div>
  );
}

export default HogTile;
