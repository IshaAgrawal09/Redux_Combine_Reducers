import {
  Add_Data,
  Subtract_Data,
  Multiply_Data,
  Divide_Data,
  clear,
} from "./Action";

const initialState = {
  add: 0,
  subtract: 0,
  multiplication: 0,
  divide: 0,
};

export const Add_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Data:
      return {
        ...state,
        add: (state.add = +action.payload.first + +action.payload.second),
      };
    case clear:
      return {
        ...state,
        add: (state.add = 0),
      };
    default:
      return {
        ...state,
      };
  }
};

export const Subtract_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Subtract_Data:
      return {
        ...state,
        subtract: (state.subtract =
          action.payload.first - action.payload.second),
      };
    case clear:
      return {
        ...state,
        subtract: (state.subtract = 0),
      };
    default:
      return {
        ...state,
      };
  }
};

export const Multiply_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Multiply_Data:
      return {
        ...state,
        multiplication: (state.multiplication =
          action.payload.first * action.payload.second),
      };
    case clear:
      return {
        ...state,
        multiplication: (state.multiplication = 0),
      };
    default:
      return {
        ...state,
      };
  }
};

export const Divide_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Divide_Data:
      return {
        ...state,
        divide: (state.divide = action.payload.first / action.payload.second),
      };
    case clear:
      return {
        ...state,
        divide: (state.divide = 0),
      };
    default:
      return {
        ...state,
      };
  }
};
