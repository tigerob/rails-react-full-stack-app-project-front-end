import { render, screen } from '@testing-library/react';
import "../tests/setupTests";
import App from '../components/App';

describe("Home page", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the 'About' component", () => {
    render(<App />);
    expect(screen.getByText(/Mia Music Studios/)).toBeInTheDocument();
  });
})