import React from "react";
import { Provider } from "react-redux";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../../../appSlice";
import TaskItem from "./TaskItem";
import store from "../../../store";

// TODO:　全てのTaskListを使っているところとAPIを連携させたらここを削除
const data = {
  name: "",
  project: { id: "", name: "" },
  endDateAt: "",
  id: "",
  user: { id: "", name: "" },
};

afterEach(() => {
  cleanup();
});

describe("Redux Integration Test", () => {
  let Store;
  Store = configureStore({
    reducer: {
      app: appReducer,
    },
  });
  it("Should add new task", () => {
    render(
      <Provider store={store}>
        <TaskItem data={data} iconType="" />
      </Provider>
    );
    userEvent.click(screen.getByTestId("test"));
  });
});
