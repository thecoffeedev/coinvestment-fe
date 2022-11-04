import { render, screen } from "@testing-library/react";
import Crypto from "../pages/Dashboard/Crypto";
import { RouterWrapper } from "../utils/test-utils";

test("to check if the class is w-full", () => {
    render(<Crypto />, { wrapper: RouterWrapper });
    expect(screen.getByTestId("cryptoContainer")).toHaveClass("w-full");
});

test("to check if the text is: cryptocurrencies", () => {
    render(<Crypto />, { wrapper: RouterWrapper });
    expect(screen.getByTestId("cryptoHeading")).toHaveTextContent("Cryptocurrencies");
});

test("to check if the attribute type is text", () => {
    render(<Crypto />, { wrapper: RouterWrapper });
    expect(screen.getByTestId("cryptoSearch")).toHaveAttribute("type", "text");
});

test("to check if the text is: #", () => {
    render(<Crypto />, { wrapper: RouterWrapper });
    expect(screen.getByTestId("row")).toHaveTextContent("#");
});

test("to check if the text is: coins", () => {
    render(<Crypto />, { wrapper: RouterWrapper });
    expect(screen.getByTestId("row1")).toHaveTextContent("Coins");
});

test("to check if the text is: price", () => {
    render(<Crypto />, { wrapper: RouterWrapper });
    expect(screen.getByTestId("row2")).toHaveTextContent("Price");
});

test("to check if the text is: 24h", () => {
    render(<Crypto />, { wrapper: RouterWrapper });
    expect(screen.getByTestId("row3")).toHaveTextContent("24h");
});

test("to check if the text is: Volume", () => {
    render(<Crypto />, { wrapper: RouterWrapper });
    expect(screen.getByTestId("row4")).toHaveTextContent("Volume");
});

test("to check if the text is: Market Capital", () => {
    render(<Crypto />, { wrapper: RouterWrapper });
    expect(screen.getByTestId("row5")).toHaveTextContent("Market Capital");
});