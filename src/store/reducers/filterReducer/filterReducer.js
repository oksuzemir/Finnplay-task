import { COLUMN_COUNT_UPDATE } from "../../actionsName";

const INITIAL_STATE = {
  columnCount: 4,
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COLUMN_COUNT_UPDATE:
      return { ...state, columnCount: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
