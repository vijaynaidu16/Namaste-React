import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Assertion
  //   const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", {name: "Login"});
  expect(loginButton).toBeInTheDocument();
});

test("should render Header component with cart components 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const CartItems = screen.getByText(/Cart/);
  expect(CartItems).toBeInTheDocument();
});

test("should render Header component with cart components 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const CartItems = screen.getByText(/Cart/);
    expect(CartItems).toBeInTheDocument();
  });