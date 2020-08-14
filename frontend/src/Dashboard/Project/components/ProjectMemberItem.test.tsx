import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectMemberItem from "./ProjectMemberItem";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../../../appSlice";
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
  it("Should display the detail of each member", () => {
    render(
      <Provider store={store}>
        <ProjectMemberItem name="" icon="" />
      </Provider>
    );
    userEvent.click(screen.getByTestId("test"));
  });
});
