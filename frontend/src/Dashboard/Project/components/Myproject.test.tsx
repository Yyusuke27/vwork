import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MyProject from "./MyProject";
import appReducer from "../../../appSlice";
import store from "../../../store";

afterEach(() => {
  cleanup();
});

describe("Redux Integration Test", () => {
  let Store;
  beforeEach(() => {
    Store = configureStore({
      reducer: {
        app: appReducer,
      },
    });
  });
  it("Should add new project", () => {
    render(
      <Provider store={store}>
        <MyProject />
      </Provider>
    );
    userEvent.click(screen.getByTestId("test"));
  });
});
