import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectMemberClickedDrawer from "./ProjectMemberClickedDrawer";
import appReducer from "../../../appSlice";
import { Provider } from "react-redux";
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
  it("Should click the card to close the current drawer", () => {
    render(
      <Provider store={store}>
        <ProjectMemberClickedDrawer />
      </Provider>
    );
    userEvent.click(screen.getByTestId("testID"));
  });
});
