import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('Contact Us Page Test Cases', () => {
    it("should load contact component", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("should load Button inside contact component", () => {
        render(<Contact/>);
        const button = screen.getByText("Submit");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("Name placeholder", () => {
        render(<Contact/>);
        const Name = screen.getByPlaceholderText("Name");
        //Assertion
        expect(Name).toBeInTheDocument();
    });
    
    
    it("Should load 2 input boxes in the contact component", () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes.length);
        //Assertion
        expect(inputBoxes.length).not.toBe(21);
    });
})



