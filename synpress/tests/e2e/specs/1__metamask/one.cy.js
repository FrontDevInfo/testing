
describe('One', () => {
    before(() => {
    
    })

    // This should be connect to metamask function
    
    // the acceptMetamaskAccess() function is unstable. 
    // In case of an error, you can comment out this line in the first test and confirm the wallet connection manually

    it('Connect wallet with goerli chain', () => {
        cy.changeMetamaskNetwork('goerli').then(networkChanged => {
            expect(networkChanged).to.be.true;
        });

        cy.acceptMetamaskAccess().should("be.true");

        cy.wait(4000);

        cy.switchToMetamaskNotification();
        cy.allowMetamaskToAddAndSwitchNetwork('close').then(approved => {
            expect(approved).to.be.true;
        });
    })
});