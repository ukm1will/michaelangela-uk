import {render, screen} from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import LinkToHomepage from "./link-to-homepage";

describe("Link to homepage", () => {
    test('renders correctly', () => {
        render(<LinkToHomepage />);
        const homePageLink = screen.getByRole('link', {name: 'Return to home page'});
        expect(homePageLink).toHaveAttribute('href', '/');

    });
})
