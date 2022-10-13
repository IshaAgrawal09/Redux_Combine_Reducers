export const Add_Data = "Add_Data";
export const Subtract_Data = "Subtract_Data";
export const Multiply_Data = "Multiply_Data";
export const Divide_Data = "Divide_Data";
export const clear = "clear";


export const Add_Action = (fVal, sVal) => {
  return {
    type: Add_Data,
    payload: {
      first: fVal,
      second: sVal,
    },
  };
};
export const Subtract_Action = (fVal, sVal) => {
  return {
    type: Subtract_Data,
    payload: {
      first: fVal,
      second: sVal,
    },
  };
};
export const Multiply_Action = (fVal, sVal) => {
  return {
    type: Multiply_Data,
    payload: {
      first: fVal,
      second: sVal,
    },
  };
};
export const Divide_Action = (fVal, sVal) => {
  return {
    type: Divide_Data,
    payload: {
      first: fVal,
      second: sVal,
    },
  };
};

export const clear_Action = () => {
  return {
    type: clear,
  };
};
