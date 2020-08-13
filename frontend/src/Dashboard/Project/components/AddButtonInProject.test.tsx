import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import AddButtonInProject from "./AddButtonInProject";
import appReducer from "../../../appSlice";
import { configureStore } from "@reduxjs/toolkit";
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
  it("Should add project", () => {
    render(
      <Provider store={store}>
        <AddButtonInProject />
      </Provider>
    );
    userEvent.click(screen.getByTestId("test"));
  });
});
