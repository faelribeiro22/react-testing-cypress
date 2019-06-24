describe("Auth", () => {
  it("should successfully create a user, logout and login", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Login");
    cy.get("#login").type("fake@email.com");
    cy.get("#password").type("123456");
    cy.contains(/entrar/i).click();
    cy.contains("Cursos Online");

    cy.contains(/Rafael Ribeiro/i).click();
    cy.contains(/sair/i).click();
    cy.contains("Login");
  });
});
