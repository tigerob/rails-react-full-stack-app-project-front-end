import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

describe ("Contact", () => {
    it("renders the 'Contact' component", () => {
        render(<Contact />, {wrapper: MemoryRouter});
        expect(screen.getByText(/Contact/)).toBeInTheDocument();
    });
})