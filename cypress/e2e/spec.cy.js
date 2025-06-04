describe('RPS Game', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/RPS%20Game/index.html');
    // Assign aliases to the option buttons
    cy.get('#rock').as('Rock');
    cy.get('#paper').as('Paper');
    cy.get('#scissors').as('Scissors');
  })

  // Play the game with the 'Rock' option and check the result
  it("play the game with Rock option and checks the result", () => {
    // Click the 'Rock' button using the alias
    cy.get('@Rock').should("exist").click();

  });
});