
describe('Two', () => {
	it('Add Network', () => {
        // This should be connect to metamask function
		cy.wait(4000);

		cy.addMetamaskNetwork({
			networkName: 'Polygon',
			rpcUrl: 'https://polygon-rpc.com',
			chainId: '137',
			symbol: 'MATIC',
			blockExplorer: 'https://polygonscan.com',
			isTestnet: false,
		}).then(networkAdded => {
			expect(networkAdded).to.be.true;
		});
	})
})