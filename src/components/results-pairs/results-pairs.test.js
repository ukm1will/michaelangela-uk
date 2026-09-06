import {render, screen, within} from "@testing-library/react";
import ResultsPairs from "./results-pairs";

describe("Summer Pairs", () => {

    test('renders title and logo for Summer pairs 2025', () => {
        const history = {location: {pathname: '/summerPairs2025'}}
        render(<ResultsPairs history={history}/>);
        const logo = screen.getByRole('img');
        const elem = within(screen.getByTestId('competition-title'));
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(elem.getByText('Summer Pairs 2025')).toBeInTheDocument();
    })


    test('renders title and logo for Summer pairs 2024', () => {
        const history = {location: {pathname: '/summerPairs2024'}}
        render(<ResultsPairs history={history}/>);
        const logo = screen.getByRole('img');
        const elem = within(screen.getByTestId('competition-title'));
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(elem.getByText('Summer Pairs 2024')).toBeInTheDocument();
    })

    test('renders title and logo for Summer pairs 2023', () => {
        const history = {location: {pathname: '/summerPairs2023'}}
        render(<ResultsPairs history={history}/>);
        const logo = screen.getByRole('img');
        const elem = within(screen.getByTestId('competition-title'));
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(elem.getByText('Summer Pairs 2023')).toBeInTheDocument();
    })

    test('renders title and logo for Winter pairs 2022-2023', () => {
        const history = {location: {pathname: '/winterPairs2022'}}
        render(<ResultsPairs history={history}/>);
        const logo = screen.getByRole('img');
        const elem = within(screen.getByTestId('competition-title'));
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(elem.getByText('Winter Pairs 2022 - 2023')).toBeInTheDocument();
    })

    test('renders link to homepage', () => {
        const history = {location: {pathname: '/winterPairs2022'}}
        render(<ResultsPairs history={history}/>);
        const homePageLink = screen.getByRole('link', {name: 'Return to home page'});
        expect(homePageLink).toHaveAttribute('href', '/');
    })
})
