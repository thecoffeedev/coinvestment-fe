import { render, screen } from "@testing-library/react"
import Bundles from "../components/Bundles"
import Buy from "../components/Buy"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Info from "../components/Info"
import Points from "../components/Points"
import SupportCoins from "../components/SupportCoins"
import Landing from "../pages/Landing"
import { RouterWrapper } from "../utils/test-utils"

test('loader test', () => {
    render(<Landing />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('loader')).toHaveClass("grid")
})

test('to check if the title is coinvestment', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('brandLogo')).toHaveTextContent("COINVESTMENT")
})

test('to check if the button has text: available bundle', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('availableBundles')).toHaveTextContent("Available Bundle")
})

test('to check if the button has text: Why Coinvestment', () => {
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

test('to check if the button has text: Invest in Bundles', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('tagline1')).toHaveTextContent("Invest in Bundles,")
})

test('to check if the button has text: not discrete cryptos', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('tagline2')).toHaveTextContent("not discrete cryptos.")
})

test('to check if the button has text: One click. Dozens of cryptos. Zero service fees', () => {
    render(<Hero />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('para1')).toHaveTextContent("One click. Dozens of cryptos. Zero service fees.")
})

test('to check if the button has text: Bundles let you invest in dozens', () => {
    render(<Bundles />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('bundlesHeadline')).toHaveTextContent("Bundles let you invest in dozens")
})

test('to check if the button has text: Each bundle is carefully crafted by experts to match your investment', () => {
    render(<Bundles />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('bundlesPara')).toHaveTextContent("Each bundle is carefully crafted by experts to match your investment")
})

test('to check if the button class: test', () => {
    render(<Bundles />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('bundlesButton')).toHaveClass("test")
})

test('to check if the image is loading', () => {
    render(<Info />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('infoImg')).toHaveAttribute("alt", "mac");
})

test('to check if the button has text: Investing has never been so easy.', () => {
    render(<Info />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('infoHeadline')).toHaveTextContent("Investing has never been so easy.")
})

test('to check if the button has text: Coinvestment is built to match the needs of investors at all levels of expertise.', () => {
    render(<Info />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('infoPara')).toHaveTextContent("Coinvestment is built to match the needs of investors at all levels of expertise.")
})

test('to check if the button has text: The simplest and most user friendly interface in the industry', () => {
    render(<Info />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('infoPoint1')).toHaveTextContent("The simplest and most user friendly interface in the industry")
})

test('to check if the button has text: A variety of payment methods including credit/debit cards and individual cryptocurrencies', () => {
    render(<Info />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('infoPoint2')).toHaveTextContent("A variety of payment methods including credit/debit cards and individual cryptocurrencies")
})

test('to check if the button has text: Free and secure custody of funds in partnership with Kingdom Trust', () => {
    render(<Info />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('infoPoint3')).toHaveTextContent("Free and secure custody of funds in partnership with Kingdom Trust")
})

test('to check if the button has text: A range of investment options to choose from according to personal preferences', () => {
    render(<Info />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('infoPoint4')).toHaveTextContent("A range of investment options to choose from according to personal preferences")
})

test('to check if the button has class: flex', () => {
    render(<Info />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('infoButton')).toHaveClass("flex")
})

test('to check if the button has class: flex', () => {
    render(<Points />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('Point1')).toHaveClass("p-8")
})

test('to check if the button has class: flex', () => {
    render(<Points />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('Point2')).toHaveClass("p-8")
})

test('to check if the button has class: flex', () => {
    render(<Points />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('Point3')).toHaveClass("p-8")
})

test('to check if the button has class: flex', () => {
    render(<Buy />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('buyContainer')).toHaveClass("py-16")
})

test('to check if the button has class: flex', () => {
    render(<Buy />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('buyCard1')).toHaveClass("test")
})

test('to check if the button has class: flex', () => {
    render(<Buy />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('buyCard2')).toHaveClass("test")
})

test('to check if the button has class: flex', () => {
    render(<Buy />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('buyCard3')).toHaveClass("test")
})

test('to check if the button has class: flex', () => {
    render(<Buy />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('buyButton')).toHaveClass("text-center")
})

test('to check if the button has class: flex', () => {
    render(<SupportCoins />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('supportHeading')).toHaveTextContent("Currencies we support right now")
})

test('to check if the button has class: flex', () => {
    render(<SupportCoins />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('supportImg')).toHaveAttribute("alt", "supportCoins")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('faqContainer')).toHaveClass("w-screen")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('faqHeading')).toHaveTextContent("Frequently Asked")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('faqHeading1')).toHaveTextContent("Questions")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('quest1')).toHaveClass("flex")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('quest2')).toHaveClass("w-full")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('quest3')).toHaveClass("items-center")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('quest4')).toHaveClass("justify-between")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('quest5')).toHaveClass("pr-6")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('quest6')).toHaveClass("pl-3")
})

test('to check if the button has class: flex', () => {
    render(<Faq />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('quest7')).toHaveClass("rounded")
})

test('to check if the button has class: flex', () => {
    render(<Footer />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('footerContainer')).toHaveClass("py-16")
})

test('to check if the button has class: flex', () => {
    render(<Footer />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('footerHeading')).toHaveTextContent("COINVESTMENT")
})

test('to check if the button has class: flex', () => {
    render(<Footer />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('footerPara')).toHaveTextContent("Made with ❤️ by Group 17")
})

test('to check if the button has class: flex', () => {
    render(<Footer />, { wrapper: RouterWrapper })
    expect(screen.getByTestId('footerPara1')).toHaveTextContent("All rights reserved.")
})