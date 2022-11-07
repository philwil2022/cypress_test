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

  clearUserField() {
    cy.get("#username").clear();
  }

  clearPasswordField() {
    cy.get("#password").clear();
  }
}
