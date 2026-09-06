import setRankInOrder from "./setRankInOrder";
import {SortOrder} from "../../enums/enums";

describe('Set rank in order of gross score Example One', () => {
    const json30July2023 =
        [
            {ranking: 1, player: 'Lewis, Chris', gross: 80, handicap: 11, nett: 69},
            {ranking: 2, player: 'Carsley, Kevin', gross: 88, handicap: 19, nett: 69},
            {ranking: 3, player: 'Linnane, Michael M', gross: 84, handicap: 13, nett: 71}
        ]

    test('sorted on gross score ascending', () => {
        const sortColumn = {path: 'gross', order: 'asc'};
        const actual = setRankInOrder(sortColumn, json30July2023);
        const expected = [
            {ranking: 1, player: 'Lewis, Chris', gross: 80, handicap: 11, nett: 69},
            {ranking: 2, player: 'Linnane, Michael M', gross: 84, handicap: 13, nett: 71},
            {ranking: 3, player: 'Carsley, Kevin', gross: 88, handicap: 19, nett: 69}
        ]
        expect(expected).toMatchObject(actual);
    })

    test('sorted on gross score descending', () => {
        const sortColumn = {path: 'gross', order: 'desc'};
        const actual = setRankInOrder(sortColumn, json30July2023);
        const expected = [
            {ranking: 1, player: 'Carsley, Kevin', gross: 88, handicap: 19, nett: 69},
            {ranking: 2, player: 'Linnane, Michael M', gross: 84, handicap: 13, nett: 71},
            {ranking: 3, player: 'Lewis, Chris', gross: 80, handicap: 11, nett: 69}
        ]
        expect(expected).toMatchObject(actual);
    })
})


describe('Set rank in order of gross score Example Three', () => {
    const json26August2023 =
        [
            {ranking: 1, player: 'O\'Sullivan, Mark', gross: 91, handicap: 24, nett: 67},
            {ranking: 2, player: 'Holwill, Chris', gross: 84, handicap: 16, nett: 68},
            {ranking: 3, player: 'Maimone, Nigel P.', gross: 83, handicap: 15, nett: 68},
            {ranking: 4, player: 'Jeffreys, Dave', gross: 83, handicap: 14, nett: 69}
        ]

    test('tied gross decided by surname first example', () => {
        const sortColumn = {path: 'gross', order: 'asc'};
        const actual = setRankInOrder(sortColumn, json26August2023);
        const expected = [
            {ranking: 1, player: 'Jeffreys, Dave', gross: 83, handicap: 14, nett: 69},
            {ranking: 2, player: 'Maimone, Nigel P.', gross: 83, handicap: 15, nett: 68},
            {ranking: 3, player: 'Holwill, Chris', gross: 84, handicap: 16, nett: 68},
            {ranking: 4, player: 'O\'Sullivan, Mark', gross: 91, handicap: 24, nett: 67}
        ]
        expect(expected).toMatchObject(actual);
    })
})

describe('Set rank in order of gross score Example Two', () => {
    const jsonSun27Aug2 =
        [
            {ranking: 1, player: 'Grieves, Mike', gross: 74, handicap: 4, nett: 70},
            {ranking: 2, player: 'Mears, Sam J', gross: 78, handicap: 6, nett: 72},
            {ranking: 3, player: 'Bevan, Jonathan R', gross: 75, handicap: 2, nett: 73},
            {ranking: 4, player: 'Morris, Dean', gross: 76, handicap: 2, nett: 74},
            {ranking: 5, player: 'Harry, Anthony', gross: 78, handicap: 4, nett: 74}
        ]

    test('tied gross score decided by surname second example', () => {
        const sortColumn = {path: 'gross', order: 'asc'};
        const actual = setRankInOrder(sortColumn, jsonSun27Aug2);
        const expected = [
            {ranking: 1, player: 'Grieves, Mike', gross: 74, handicap: 4, nett: 70},
            {ranking: 2, player: 'Bevan, Jonathan R', gross: 75, handicap: 2, nett: 73},
            {ranking: 3, player: 'Morris, Dean', gross: 76, handicap: 2, nett: 74},
            {ranking: 4, player: 'Harry, Anthony', gross: 78, handicap: 4, nett: 74},
            {ranking: 5, player: 'Mears, Sam J', gross: 78, handicap: 6, nett: 72}
        ]
        expect(expected).toMatchObject(actual);
    })
})

