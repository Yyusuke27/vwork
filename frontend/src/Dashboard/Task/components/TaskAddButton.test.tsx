import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import appReducer from "../../../appSlice";
import TaskAddButton from "./TaskAddButton";
import store from "../../../store";

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
        <TaskAddButton />
      </Provider>
    );
    userEvent.click(screen.getByTestId("test"));
  });
});
