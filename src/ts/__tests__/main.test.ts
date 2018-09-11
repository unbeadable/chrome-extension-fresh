import {render} from '../main';

describe('main', () => {
    const hostDivId = "zeitgeistBadge_feature_div";

    it('should inject HTML when page has ASIN', async () => {
        document.body.innerHTML =
            `<div id='${hostDivId}'></div>` +
            '<table>' +
            '<tr><td class="label">ASIN</td><td class="value">B001LQCCDK</td></tr>' +
            '</table>';

        render();

        const hostDiv: HTMLElement = document.getElementById(hostDivId);
        expect(hostDiv.innerHTML).toBe("<div id=\"badge\"></div>");
    });

    it('should keep HTML as is when page does not have an ASIN', async () => {
        document.body.innerHTML =
            `<div id='${hostDivId}'></div>` +
            '<table>' +
            '<tr><td class="label">NOT AN ASIN</td><td class="value">B001LQCCDK</td></tr>' +
            '</table>';

        render();

        const hostDiv: HTMLElement = document.getElementById(hostDivId);
        expect(hostDiv.innerHTML).toBe("");
    });
});