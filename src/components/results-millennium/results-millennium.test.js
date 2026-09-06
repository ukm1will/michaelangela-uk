import ResultsMillennium from "./results-millennium";
import {render, screen, within} from "@testing-library/react";

describe("Millennium Cup", () => {

    test('renders title and logo for year 2025', () => {
        const history = { location: { pathname: '/millenniumCup2025' }}
        render(<ResultsMillennium history={history} />);
        const logo = screen.getByRole('img');
        const elem = within(screen.getByTestId('competition-title'));
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(elem.getByText('Millennium Cup 2025')).toBeInTheDocument();
    })

    test('renders title and logo for year 2024', () => {
        const history = { location: { pathname: '/millenniumCup2024' }}
        render(<ResultsMillennium history={history} />);
        const logo = screen.getByRole('img');
        const elem = within(screen.getByTestId('competition-title'));
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(elem.getByText('Millennium Cup 2024')).toBeInTheDocument();
    })


    test('renders title and logo for year 2023', () => {
        const history = { location: { pathname: '/millenniumCup2023' }}
        render(<ResultsMillennium history={history} />);
        const logo = screen.getByRole('img');
        const elem = within(screen.getByTestId('competition-title'));
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(elem.getByText('Millennium Cup 2023')).toBeInTheDocument();
    })

    test('renders title and logo for year 2022', () => {
        const history = { location: { pathname: '/millenniumCup2022' }}
        render(<ResultsMillennium history={history} />);
        const logo = screen.getByRole('img');
        const elem = within(screen.getByTestId('competition-title'));
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(elem.getByText('Millennium Cup 2022')).toBeInTheDocument();
    })

    test('renders title and logo for year 2021', () => {
        const history = { location: { pathname: '/millenniumCup2021' }}
        render(<ResultsMillennium history={history} />);
        const logo = screen.getByRole('img');
        const elem = within(screen.getByTestId('competition-title'));
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(elem.getByText('Millennium Cup 2021')).toBeInTheDocument();
    })

    test('renders link to homepage', () => {
        const history = { location: { pathname: '/millenniumCup2021' }}
        render(<ResultsMillennium history={history} />);
        const homePageLink = screen.getByRole('link', {name: 'Return to home page'});
        expect(homePageLink).toHaveAttribute('href', '/');
    })
})

