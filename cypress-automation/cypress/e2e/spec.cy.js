describe("template spec", () => {
  it("passes", async () => {
    await cy.visit("https://www.amazon.in/");
    cy.url().should('equal', 'https://www.amazon.in/');
  });
});

// add js function to sum 2 numbers


