import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Add_Action,
  clear_Action,
  Divide_Action,
  Multiply_Action,
  Subtract_Action,
} from "../Redux/Action";

const Calculator = (props) => {
  const [value, setValue] = useState({
    fVal: "",
    sVal: "",
  });

 
  const operation = (event) => {
    if (event === "add") {
      props.Add_Action(value.fVal, value.sVal);
    } else if (event === "sub") {
      props.Subtract_Action(value.fVal, value.sVal);
    } else if (event === "mul") {
      props.Multiply_Action(value.fVal, value.sVal);
    } else if (event === "divide") {
      props.Divide_Action(value.fVal, value.sVal);
    } else if (event === "reset") {
      props.clear_Action();
    }
  };

  return (
    <div className="calculator">
      <h2>Calculate Data</h2>
      <div>
        <div>
          <input
            type="number"
            placeholder="First Value"
            value={value.fVal}
            onChange={(event) =>
              setValue({ ...value, fVal: event.target.value })
            }
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Second Value"
            value={value.sVal}
            onChange={(event) =>
              setValue({ ...value, sVal: event.target.value })
            }
          />
        </div>
        <div className="btn">
          <button onClick={() => operation("add")}>+</button>
          <button onClick={() => operation("sub")}>-</button>
          <button onClick={() => operation("mul")}>*</button>
          <button onClick={() => operation("divide")}>/</button>
          <button onClick={() => operation("reset")}>CLEAR</button>
        </div>

        <div className="result">
          <h2>RESULT</h2>
          <table>
            <tr>
              <td>Addition:</td>
              <td>{props.add_result}</td>
            </tr>
            <tr>
              <td>Subtraction:</td>
              <td>{props.subtract_result}</td>
            </tr>
            <tr>
              <td>Multiplication:</td>
              <td>{props.multiply_result}</td>
            </tr>
            <tr>
              <td>Divide:</td>
              <td>{props.divide_result}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    add_result: state.add.add,
    subtract_result: state.Subtract.subtract,
    multiply_result: state.multiply.multiplication,
    divide_result: state.divide.divide,
    // clear_State: state.clear.clear
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Add_Action: (fVal, sVal) => dispatch(Add_Action(fVal, sVal)),
    Subtract_Action: (fVal, sVal) => dispatch(Subtract_Action(fVal, sVal)),
    Multiply_Action: (fVal, sVal) => dispatch(Multiply_Action(fVal, sVal)),
    Divide_Action: (fVal, sVal) => dispatch(Divide_Action(fVal, sVal)),
    clear_Action: () => dispatch(clear_Action()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
