
describe('Disconnect wallet', () => {
	it('Through the UI', () => {        
		// This should be connect to metamask function
        cy.wait(4000);

        cy.disconnectMetamaskWalletFromDapp().then(disconnected => {
			expect(disconnected).to.be.true;
		});
	})
})