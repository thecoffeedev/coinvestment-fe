import { render, screen } from "@testing-library/react";
import Account from "../pages/Dashboard/Account";
import { RouterWrapper } from "../utils/test-utils";

test("heading of wallet component is Wallets", () => {
  render(<Account />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("walletHeading")).toHaveTextContent("Wallets");
});

test("heading of wallet component is Bundles", () => {
  render(<Account />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("bundlesHeading")).toHaveTextContent("Bundles");
});
