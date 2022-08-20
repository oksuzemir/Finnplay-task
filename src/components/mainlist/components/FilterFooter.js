import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { COLUMN_COUNT_UPDATE } from "../../../store/actionsName";

const FilterFooter = (props) => {
  const [selectedColumn, setSelectedColumn] = useState(4);
  const { gamesAmount, resetFilters } = props;
  const dispatch = useDispatch();
  const lineRef = useRef(null);

  const updateColumn = (e) => {
    setSelectedColumn(Number(e.target.innerHTML));
    dispatch({
      type: COLUMN_COUNT_UPDATE,
      payload: Number(e.target.innerHTML),
    });
  };

  useEffect(() => {
    if (selectedColumn === 4) {
      lineRef.current.style.width = "100%";
    } else if (selectedColumn === 3) {
      lineRef.current.style.width = "55%";
    } else if (selectedColumn === 2) {
      lineRef.current.style.width = "0%";
    }
  }, [selectedColumn]);

  return (
    <div className={"filter-footer-wrapper"}>
      <div className={"columns-setter"}>
        <h5>Columns</h5>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className={"columns-line"} ref={lineRef}>
            <div className={"orange"} onClick={updateColumn}>
              2
            </div>
            <div
              className={selectedColumn >= 3 ? "orange" : "gray"}
              onClick={updateColumn}
            >
              3
            </div>
            <div
              className={selectedColumn >= 4 ? "orange" : "gray"}
              onClick={updateColumn}
            >
              4
            </div>
          </div>
        </div>
        <div className={"columns-line-gray"}></div>
      </div>
      <div className={"other"}>
        <p className={"amount"}>Games amount: {gamesAmount}</p>
        <div
          className={"reset-button"}
          onClick={() => {
            setSelectedColumn(4);
            resetFilters();
          }}
        >
          Reset
        </div>
      </div>
    </div>
  );
};

export default FilterFooter;
