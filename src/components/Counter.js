import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.count.count);
  const show = useSelector((state) => state.count.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterAction.increase(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.showCount());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className={classes.button}>
        <button onClick={incrementHandler}>Increase</button>
        <button onClick={increaseHandler}>IncreaseBig</button>
        <button onClick={decrementHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
