import { render, screen } from "@testing-library/react";
import Register from "../pages/Register";
import { RouterWrapper } from "../utils/test";

test("company title is COINVESTMENT", () => {
  render(<Register />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("companyTitle")).toHaveTextContent("COINVESTMENT");
});


test("Email input has type email", () => {
  render(<Register />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("emailInput")).toHaveAttribute("type", "email");
});

test("Email input has a placeholder Email", () => {
  render(<Register />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("emailInput")).toHaveAttribute("placeholder", "Email");
});

test("Password input has type password", () => {
  render(<Register />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("passwordInput")).toHaveAttribute(
    "type",
    "password"
  );
});

test("Password input has placeholder Password", () => {
  render(<Register />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("passwordInput")).toHaveAttribute(
    "placeholder",
    "Password"
  );
});

test("Login button is not disabled", () => {
  render(<Register />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("registerBtn")).not.toBeDisabled()
});

test("Register button is not disabled", () => {
  render(<Register />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("loginBtn")).not.toBeDisabled()
});
