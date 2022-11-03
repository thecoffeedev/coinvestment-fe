import { render, screen } from "@testing-library/react"
import Landing from "../pages/Landing"
import Hero from "../components/Hero"
import Bundles from "../components/Bundles"
import { RouterWrapper } from "../utils/test"

test('loader test', () => {
    render(<Landing />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('loader')).toHaveClass("grid")
})

test('to check if the title is coinvestment', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('brandLogo')).toHaveTextContent("COINVESTMENT")
})

test('to check if the button has text available bundle', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('availableBundles')).toHaveTextContent("Available Bundle")
})

test('to check if the button has text Why Coinvestment', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('whyCoinvestment')).toHaveTextContent("Why Coinvestment")
})

test('to check if the button has text faq', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('faq')).toHaveTextContent("FAQ")
})

test('to check if the image is loading', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('heroImage')).toHaveAttribute("alt", "macImg");
})

test('to check if the button has text Invest in Bundles', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('tagline1')).toHaveTextContent("Invest in Bundles,")
})

test('to check if the button has text not discrete cryptos', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('tagline2')).toHaveTextContent("not discrete cryptos.")
})

test('to check if the button has text One click. Dozens of cryptos. Zero service fees', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('para1')).toHaveTextContent("One click. Dozens of cryptos. Zero service fees.")
})

test('to check if the button has text Bundles let you invest in dozens', () => {
    render(<Bundles />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('bundlesHeadline')).toHaveTextContent("Bundles let you invest in dozens")
})

// test('to check if the button has text One click. Dozens of cryptos. Zero service fees', () => {
//     render(<Bundles />, { wrapper: RouterWrapper })
//     expect(screen.getByTestId('para1')).toHaveTextContent("One click. Dozens of cryptos. Zero service fees.")
// })

