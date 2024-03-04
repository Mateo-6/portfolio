
import '@testing-library/jest-dom';
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import App from "../App";

import { AboutSection } from '@app/section/main/about';
import { EducationSection } from '@app/section/main/education';
import { ExperienceSection } from '@app/section/main/exprecience';

//Data
import dataJson from "../data/cv.json";

test('demo', () => {
  expect(true).toBe(true)
})

test("Renders the main page", () => {
  render(<App />)
  expect(true).toBeTruthy()
})

describe('MyComponent', () => {
  /* it('renders AboutSection correctly when section is "about"', () => {
    const about = 'About description';
    const { getByText } = render(<AboutSection section="about" description={about} />);
    expect(getByText('About description')).toBeInTheDocument();
  });

  it('renders EducationSection correctly when section is "education"', async () => {
    const education = [
      {
        "from": "2020",
        "to": "2023",
        "bachelor": "Bachelor of Engineering in Systems Engineering",
        "description": "Institución Universitaria Antonio Jose Camacho, Cali, Colombia"
      }
    ];

    const { getByText } = render(<EducationSection education={education} />);

    // Verifica que el componente se renderice correctamente
    expect(getByText(/2020 - 2023/)).toBeInTheDocument();
    expect(getByText(/Bachelor of Engineering in Systems Engineering/)).toBeInTheDocument();
    expect(getByText(/Institución Universitaria Antonio Jose Camacho, Cali, Colombia/)).toBeInTheDocument();

  });

  it('renders ExperienceSection correctly when section is "experience"', () => {
    const experience = [
      {
        "company": "VOV Solutions SA",
        "rol": "Software Engineer II",
        "from": "Nov 2021",
        "to": "Feb 2024",
        "projects": [
          {
            "projectName": "Spreso",
            "from": "2024",
            "to": "2024",
            "description": "Development a company dashboard to manage the internal operations.",
            "tasks": [
              "Development new features to increase functionalities of the dashboard. Using React and TypeScript.",
              "Use GraphQL to connect client and Backend.",
              "Development of custom end points to make specific features."
            ],
            "technologies": [
              "JavaScript",
              "GraphQL",
              "MongoDB",
              "React",
              "Typescript",
              "Express"
            ]
          },
        ]
      }
    ];

    const { getByText } = render(<ExperienceSection experience={experience} />);
    expect(getByText(/VOV Solutions SA/)).toBeInTheDocument();
  }); */

  it('renders main content correctly when window width is > 1024', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1025 });
    const { getByText } = render(<App />);
    expect(getByText(/Full stack software engineer/)).toBeInTheDocument();
    expect(getByText(/Bachelor of Engineering/)).toBeInTheDocument();
    expect(getByText(/VOV Solutions SA/)).toBeInTheDocument();
  });

  it('renders joke message when joke is false', () => {
    // Mock localStorage.getItem to return false
    const localStorageMock = {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null)
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    jest.useFakeTimers(); // Mock setTimeout
    render(<App />);
    jest.advanceTimersByTime(5000); // Advance timers to trigger joke
    expect(localStorageMock.setItem).toHaveBeenCalledWith('joke', 'true');
    expect(document.getElementById('delayedElement')).not.toHaveClass('hidden');
    expect(document.getElementById('joke')).toHaveClass('hidden');
  });

  it('changes section state when onToggleClick is called', () => {
    const { getByText } = render(<App />);

    // Verificamos que inicialmente el estado de section sea 'about'
    expect(getByText(/Full stack software engineer/)).toBeInTheDocument();
    fireEvent.click(getByText('Education'));
    expect(getByText(/Bachelor of Engineering/)).toBeInTheDocument();
  });
});
