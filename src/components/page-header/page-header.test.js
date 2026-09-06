import {render, screen, within} from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import PageHeader from "./page-header";

describe("Page Header", () => {

    beforeEach(() => render(<PageHeader dataTestId='competition-title' pageTitle="Club Championship 2022"/>));

    test('renders title correctly', () => {
        const elem = within(screen.getByTestId('competition-title'));
        expect(elem.getByText('Club Championship 2022')).toBeInTheDocument();
    })

    test('renders image correctly', () => {
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', 'logo.png');
    })
})

