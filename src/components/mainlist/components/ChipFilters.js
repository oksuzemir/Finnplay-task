import React from "react";
import { generateKey } from "../../../helper/helper";

const ChipFilters = (props) => {
  const {
    GamesList,
    filteredGames,
    setFilteredGames,
    usingFilterID,
    setFilterID,
    usingGroupID,
    setGroupID,
    currentOrder,
    setCurrentOrder,
    groupIndex,
    setGroupIndex,
  } = props;

  const filterGamesByProvider = (e, id) => {
    let isThere = usingFilterID.some((item) => item === id);
    if (isThere) {
      let newArray = usingFilterID.filter((item) => item !== id);
      setFilterID(newArray);
    } else {
      let newArray = [...new Set([...usingFilterID, id])];
      setFilterID(newArray);
    }
  };

  const filterGamesByGroup = (e, gamesArray, index) => {
    let isThere = groupIndex.some((item) => item === index);
    if (isThere) {
      let newArray = groupIndex.filter((item) => item !== index);
      setGroupIndex(newArray);
      let newGroupArray = usingGroupID.filter(
        (val) => !gamesArray.includes(val)
      );
      setGroupID(newGroupArray);
    } else {
      let newIndexArray = [...new Set([...groupIndex, index])];
      setGroupIndex(newIndexArray);
      let newArray = usingGroupID.concat(gamesArray);
      newArray = [...new Set([...newArray])];
      setGroupID(newArray);
    }
  };

  const order = (id) => {
    setCurrentOrder(id);
    let newArray = filteredGames;
    if (id === 1) {
      newArray = filteredGames.sort((a, b) => a.name.localeCompare(b.name));
    } else if (id === 2) {
      newArray = filteredGames
        .sort((a, b) => a.name.localeCompare(b.name))
        .reverse();
    } else if (id === 3) {
      newArray = filteredGames.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }
    setFilteredGames([...newArray]);
  };

  return (
    <div className={"chip-filters-wrapper"}>
      <div className={"chip-wrapper"}>
        <h5>Providers</h5>
        <div className={"provider-chips-wrapper"}>
          {GamesList.providers.map((provider, index) => (
            <span
              className={
                usingFilterID.some((item) => item === provider.id)
                  ? "chip-span chip-active"
                  : "chip-span"
              }
              key={generateKey(provider.name)}
              data-id={provider.id}
              onClick={(e) => filterGamesByProvider(e, provider.id)}
            >
              {provider.name}
            </span>
          ))}
        </div>
      </div>
      <div className={"chip-wrapper"}>
        <h5>Game groups</h5>
        <div className={"provider-chips-wrapper"}>
          {GamesList.groups.map((group, index) => (
            <span
              className={
                groupIndex.some((item) => item === index)
                  ? "chip-span chip-active"
                  : "chip-span"
              }
              key={generateKey(group.name)}
              data-id={group.id}
              onClick={(e) => filterGamesByGroup(e, group.games, index)}
            >
              {group.name}
            </span>
          ))}
        </div>
      </div>
      <div className={"chip-wrapper"}>
        <h5>Sorting</h5>
        <div className={"provider-chips-wrapper"}>
          {[
            { name: "A-Z", id: 1 },
            { name: "Z-A", id: 2 },
            { name: "Newest", id: 3 },
          ].map((item) => (
            <span
              className={
                currentOrder === item.id ? "chip-span chip-active" : "chip-span"
              }
              key={item.id}
              onClick={() => order(item.id)}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChipFilters;
