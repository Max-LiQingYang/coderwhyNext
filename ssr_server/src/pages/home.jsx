import React, { userState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData, increment } from "../store/modules/home";

const Home = function () {
  // 从 redux 的 state 读取数据
  const { counter } = useSelector((rootState) => {
    return {
      counter: rootState.home.counter,
    };
  });

  // 触发 同步action
  const dispatch = useDispatch();
  function addCounter() {
    dispatch(increment(2));
  }

  // 异步 action
  function getHomeData() {
    dispatch(fetchHomeData());
  }

  return <div>Home {counter}</div>;
};

export default Home;
