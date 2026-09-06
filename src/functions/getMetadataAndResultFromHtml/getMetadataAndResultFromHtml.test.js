import {getHtml03Sep2023Stableford} from "../../testData/getHtml03Sep2023Stableford";
import {getResultsOnlyHtml03Sep2023Stableford} from "../../testData/getResultsOnlyHtml03Sep2023Stableford";
import getMetadataAndResultFromHtml from "./getMetadataAndResultFromHtml";
import {getHtml02Dec2023Medal} from "../../testData/getHtml02Dec2023Medal";
import {getResultsOnlyHtml02Dec2023Medal} from "../../testData/getResultsOnlyHtml02Dec2023Medal";

describe("Metadata and results are correct when extracting data from html", () => {
    test('stableford on 03 Sept 2023', () => {
        const html03Sep2023Stableford = getHtml03Sep2023Stableford();
        const expected = getMetadataAndResultFromHtml(html03Sep2023Stableford);
        const metaData = expected[0];
        const result = expected[1];
        expect(metaData).toEqual(["Club Stableford", "03 September 2023"]);
        expect(result).toEqual(getResultsOnlyHtml03Sep2023Stableford());
    })

    test('medal on 02 Dec 2023', () => {
        const html02Dec2023Medal = getHtml02Dec2023Medal();
        const expected = getMetadataAndResultFromHtml(html02Dec2023Medal);
        const metaData = expected[0];
        const result = expected[1];
        expect(metaData).toEqual(["Club Medal and AGM", "02 December 2023"]);
        expect(result).toEqual(getResultsOnlyHtml02Dec2023Medal());
    })
})
