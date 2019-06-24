describe("Payment", () => {
  it("should successfully make a payment", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Login");
    cy.contains("Cadastre-se aqui").click();
    cy.contains("Novo usuário");
    cy.get("#name").type("Rafael Ribeiro");
    cy.get("#login").type("fake@email.com");
    cy.get("#password").type("123456");

    cy.contains(/cadastrar/i).click();
    cy.contains("Cursos Online");

    cy.contains(/comprar/i).click();
    cy.contains("Pagamento");
    cy.contains(/concluir compra/i).click();
    cy.contains(/pagamento realizado com sucesso/i);
  });
});
