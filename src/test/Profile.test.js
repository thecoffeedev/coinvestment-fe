import { render, screen } from "@testing-library/react";
import Modal from "../components/Modal/Modal";
import Profile from "../pages/Dashboard/Profile";
import { RouterWrapper } from "../utils/test-utils";


test("heading Profile page should be Profile", () => {
  render(<Profile />, { wrapper: RouterWrapper });
  expect(screen.getByTestId("pageHeading")).toHaveTextContent("Profile");
});