import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";
import { RouterWrapper } from "../utils/test-utils";

test("company title is COINVESTMENT", () => {
  render(<Login />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("companyTitle")).toHaveTextContent("COINVESTMENT");
});

test("Email input has type email", () => {
  render(<Login />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("emailInput")).toHaveAttribute("type", "email");
});

test("Email input has a placeholder Email", () => {
  render(<Login />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("emailInput")).toHaveAttribute("placeholder", "Email");
});

test("Password input has type password", () => {
  render(<Login />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("passwordInput")).toHaveAttribute(
    "type",
    "password"
  );
});

test("Password input has placeholder Password", () => {
  render(<Login />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("passwordInput")).toHaveAttribute(
    "placeholder",
    "Password"
  );
});

test("Login button is not disabled", () => {
  render(<Login />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("button-login")).not.toBeDisabled()
});

test("Register button is not disabled", () => {
  render(<Login />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("registerBtn")).not.toBeDisabled()
});
