import {render, screen, within} from "@testing-library/react";
import user from '@testing-library/user-event';
import Unconverted from "./unconverted";
import {getHtml07Sep2023Medal} from "../../testData/getHtml07Sep2023Medal";

describe.skip("Unconverted", () => {

    test('renders html controls', () => {
        render(<Unconverted/>);
        expect(screen.getByRole('link', {name: 'Return to home page'})).toHaveAttribute('href', '/');
        expect(screen.getByRole('img')).toHaveAttribute('src', 'logo.png');
        expect(screen.getByText(/Open a new tab and navigate to Master Scoreboard/)).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Convert"})).toBeInTheDocument();
    })

    // This test has been included as a way of testing the process end to end.
    // The 'Unconverted' component is rendered, the textbox is populated, convert button is clicked.
    // Control transfers to the 'Converted' component, where text is converted to json, then displayed as HTML.
    // Output is then tested to ensure the input matches the output.

    test('populates textbox with valid data, clicks button and renders result', async () => {
        const html03Sep2023Stableford = getHtml07Sep2023Medal();
        user.setup();
        render(<Unconverted/>);
        const textBox = screen.getByRole('textbox');
        await user.clear(textBox);
        await user.type(textBox, html03Sep2023Stableford);
        const convertButton = screen.getByRole("button", {name: "Convert"});
        await user.click(convertButton);
        const rows = screen.getAllByRole('row');
        expectRowContents(rows[1], 1, 'Bromham, Neil', 72, 8, 64);
        expectRowContents(rows[2], 2, 'Fisher, Karl', 75, 7, 68);
        expectRowContents(rows[3], 3, 'Blizzard, Martin', 77, 18, 59);
        expectRowContents(rows[4], 4, 'James, Danny', 77, 10, 67);
    }, 20000);
})

function expectRowContents(row, ranking, player, gross, handicap, nett) {
    const columns = within(row).getAllByRole('cell');
    expect(columns).toHaveLength(5);
    expect(columns[0]).toHaveTextContent(ranking);
    expect(columns[1]).toHaveTextContent(player);
    expect(columns[2]).toHaveTextContent(gross);
    expect(columns[3]).toHaveTextContent(handicap);
    expect(columns[4]).toHaveTextContent(nett);
}
