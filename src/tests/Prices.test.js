import { render, screen } from '@testing-library/react';
import Prices from '../components/Prices';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

describe ("Prices", () => {
    it("renders the 'Prices' component", () => {
        render(<Prices />, {wrapper: MemoryRouter});
        expect(screen.getByText(/Mia's Prices/)).toBeInTheDocument();
    });
})