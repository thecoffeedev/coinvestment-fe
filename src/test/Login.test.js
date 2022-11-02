
import { render, screen } from "@testing-library/react"
import Login from "../pages/Login"
import { RouterWrapper } from "../utils/test"

test('company title is COINVESTMENT', () => { 
  render(<Login />, { wrapper: RouterWrapper })
  expect(screen.getByTestId('companyTitle')).toHaveTextContent("COINVESTMENT")
 })

 test('should first', () => { 
  render(<Login />, { wrapper: RouterWrapper })
  expect(screen.getByTestId('emailInput')).toHaveProperty('type')
  })