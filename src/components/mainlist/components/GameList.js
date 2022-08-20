import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { generateKey } from "../../../helper/helper";

const GameList = (props) => {
  const { columnCount } = useSelector((state) => state.filterReducer);
  const { GamesList, filteredGames, setFilteredGames } = props;
  const gridRef = useRef(null);

  useEffect(() => {
    if (GamesList) {
      let providerIdsList = GamesList.groups
        .map((group) => group.games)
        .map((provider) => provider);
      providerIdsList = providerIdsList.reduce((a, b) => a.concat(b), []);
      let filterNonProvided = GamesList.games.map((game) => {
        let isThereAProvider = providerIdsList.find(
          (provider) => provider === game.id
        );
        if (isThereAProvider) {
          return game;
        }
      });
      filterNonProvided = filterNonProvided.filter(
        (game) => game !== undefined
      );
      setFilteredGames(filterNonProvided);
    }
  }, [GamesList]);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
    }
  }, [columnCount]);

  return (
    <div className={"games-list"}>
      <ul className="grid-wrapper" ref={gridRef}>
        {filteredGames.map((game) => (
          <li key={generateKey(game.cover)}>
            <img
              src={columnCount === 2 ? game.coverLarge : game.cover}
              alt={"Game cover"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
