import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../../../appSlice";
import TaskAddButton from "./TaskAddButton";
import { Provider } from "react-redux";
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
