describe("home", () => {
  it("tests home", () => {
    cy.viewport(1330, 1086);
    cy.visit("http://localhost:3000/");
  });
});
