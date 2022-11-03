import { render, screen } from "@testing-library/react";
import Account from "../pages/Dashboard/Account";
import { RouterWrapper } from "../utils/test-utils";

test("heading of wallet component is Wallets", () => {
  render(<Account />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("walletHeading")).toHaveTextContent("Wallets");
});

test("heading of wallet component is Wallets", () => {
  render(<Account />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("walletsHeading")).toHaveTextContent("Your active Wallets are listed here.");
});

test("heading of wallet component is Bundles", () => {
  render(<Account />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("bundlesHeading")).toHaveTextContent("Bundles");
});

test("heading of wallet component is Bundles", () => {
  render(<Account />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("bundlesDescription")).toHaveTextContent("Your active Bundles are listed here.");
});
