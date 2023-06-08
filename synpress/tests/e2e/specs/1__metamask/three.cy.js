
describe('Switch account', () => {

	// After executing the switchMetamaskAccount(1) function, 
	// you must manually open the metamask extension and confirm the account change. 
	// In this case, the test will complete successfully.

	it('Test', () => {
		// This should be connect to metamask function

		cy.switchMetamaskAccount(1).then(accountChanged => {
			expect(accountChanged).to.be.true;
		}).then(connected => {
			expect(connected).to.be.true;
		});
		
		cy.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
		cy.log('Open the metamask and confirm the account change manually');
		cy.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');

		cy.getMetamaskWalletAddress().then(address => {
            cy.get('.address').should('have.text', address);
        });
	})
})