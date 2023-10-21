import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
// import * as reactRedux from "react-redux";

import App from "../App";

const mockStore = configureStore();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  // useSelector: jest.fn(),
  useDispatch: () =>
    jest.fn().mockImplementation(() => Promise.resolve({ title: "test" })),
}));

describe("App component", () => {
  beforeEach(() => {
    let store = mockStore({
      pokedox: {
        data: [],
        error: "",
        loading: false,
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("renders search input", () => {
    const searchInput = screen.getByPlaceholderText("Search pokemon...");
    expect(searchInput).toBeInTheDocument();
  });

  test("search input updates value correctly", () => {
    const searchInput = screen.getByPlaceholderText(
      "Search pokemon..."
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "pikachu" } });

    expect(searchInput.value).toBe("pikachu");
  });
});
// CurrentMenu
// 'node_modules/(?!my-library-dir)/'
