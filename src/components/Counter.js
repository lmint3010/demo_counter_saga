import React from "react";
import { connect } from "react-redux";

// Action Creators
import {
  increaseDispatch,
  decreaseDispatch,
  increaseAsyncDispatch,
  decreaseAsyncDispatch
} from "../actions/counterAction";

const Counter = props => {
  const {
    increaseDispatch,
    decreaseDispatch,
    increaseAsyncDispatch,
    decreaseAsyncDispatch,
    reduxState
  } = props;

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h4>Counter: {reduxState.counterValue}</h4>
      <button onClick={increaseDispatch}>Increase</button>
      <button onClick={decreaseDispatch}>Decrease</button>
      <button onClick={increaseAsyncDispatch}>Increase after 1 second</button>
      <button onClick={decreaseAsyncDispatch}>Decrease after 1 second</button>
    </div>
  );
};

const mapStateToProps = reduxState => ({ reduxState });

const mapDispatchToProps = {
  increaseDispatch,
  decreaseDispatch,
  increaseAsyncDispatch,
  decreaseAsyncDispatch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
