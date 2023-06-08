import { URL } from "../../valueData/valueData.js";
import example from "../../pageObject/example.js";

describe('Example tests', () => {
	beforeEach(() => {
		cy.visit(URL);
		cy.wait(4000);
    })

	it('Check title', () => {
        example.elements.title().should('be.visible');
	})
})