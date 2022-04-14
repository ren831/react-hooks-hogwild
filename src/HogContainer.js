import { useState } from "react";
import HogTile from "./components/HogTile";

function HogContainer({ hogs }) {
  const [myHogs, setMyHogs] = useState(hogs);
  const [filterByGreased, setFilteredByGreased] = useState(false);
  const [sortByName, setSortByName] = useState(false);

  function handleFilter(e) {
    setFilteredByGreased(!filterByGreased);

    if (e.target.checked) {
      const hogsFiltered = myHogs.filter((hog) => {
        return hog.greased === true;
      });
      setMyHogs(hogsFiltered);
    } else setMyHogs(hogs);
  }

  function handleSort(e) {
    setSortByName(!sortByName);

    if (e.target.checked) {
      let sortedHogs = myHogs.slice().sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setMyHogs(sortedHogs);
    } else setMyHogs(hogs);
  }

  return (
    <div>
      <div>
        Only greased:
        <input onClick={handleFilter} type="checkbox" id="filter"></input>
      </div>
      <div>
        Sort by name:{" "}
        <input onClick={handleSort} type="checkbox" id="sort"></input>
      </div>
      {myHogs.map((hog) => (
        <HogTile hog={hog} />
      ))}
    </div>
  );
}

export default HogContainer;
