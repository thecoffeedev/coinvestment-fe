import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './UserContext';


export const RouterWrapper = ({ children }) => (
  <UserProvider><MemoryRouter>{children}</MemoryRouter></UserProvider>
);