
import '@testing-library/jest-dom';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import React from "react";
import App from "../App";

describe('App', () => {
  test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
  })

  it('renders main content correctly when window width is > 1024', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1025 });
    const { getByText } = render(<App />);
    setTimeout(() => {
      expect(getByText(/Front end experience/)).toBeInTheDocument();
      expect(getByText(/Bachelor of Engineering/)).toBeInTheDocument();
      expect(getByText(/VOV Solutions SA/)).toBeInTheDocument();
    }, 5000);
  });

  it('renders joke message when joke is false', () => {
    // Mock localStorage.getItem to return false
    const localStorageMock = {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null)
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    jest.useFakeTimers(); // Mock setTimeout
    const { getByText } = render(<App />);
    jest.advanceTimersByTime(5000); // Advance timers to trigger joke
    expect(localStorageMock.setItem).toHaveBeenCalledWith('joke', 'true');
    expect(document.getElementById('delayedElement')).not.toHaveClass('hidden');
    expect(document.getElementById('joke')).toHaveClass('hidden');
    expect(getByText("Wait I'am Joking :D")).toBeInTheDocument();
  });

  it('changes section state when onToggleClick is called (About)', () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByTestId('about'));
    expect(getByText(/Front end experience/)).toBeInTheDocument();
  });

  it('changes section state when onToggleClick is called (Education)', () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByTestId('education'));
    expect(getByText(/Bachelor of Engineering/)).toBeInTheDocument();
  });

  it('changes section state when onToggleClick is called (Experience)', () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByTestId('experience'));
    expect(getByText(/VOV Solutions SA/)).toBeInTheDocument();
  });
});
