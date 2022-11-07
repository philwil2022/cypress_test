export class LoginPage {
  fillUser(text) {
    cy.get("#username").type(text);
  }

  fillPassword(text) {
    cy.get("#password").type(text);
  }

  clickButtonLogin() {
    cy.get(".fa").click();
  }
}
