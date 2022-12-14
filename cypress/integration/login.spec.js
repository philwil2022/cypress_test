/// <reference types="cypress" />

describe("TEST DE LOGIN", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get(":nth-child(21) > a").click();
  });

  it("A valid user can login", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("You logged into a secure area!");
  });

  it("An invalid password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SSuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your password is invalid!");
  });

  it("An invalid username", () => {
    cy.get("#username").type("tomjames");
    cy.get("#password").type("SSuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your username is invalid!");
  });

  it("Trying to log in with empty input fields", () => {
    cy.get("#username").clear();
    cy.get("#password").clear();
    cy.get(".fa").click();
    cy.get("#flash").contains("Your username is invalid!");
  });
});
