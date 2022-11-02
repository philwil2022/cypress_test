/// <reference types="cypress" />

it("A valid user can login", () => {
  cy.visit("https://the-internet.herokuapp.com/");

  cy.get(":nth-child(21) > a").click();

  cy.get("#username").type("tomsmith");

  cy.get("#password").type("SuperSecretPassword!");

  cy.get(".fa").click();

  cy.get("#flash").contains("You logged into a secure area!");
});

it("An invalid password", () => {
  cy.visit("https://the-internet.herokuapp.com/");

  cy.get(":nth-child(21) > a").click();

  cy.get("#username").type("tomsmith");

  cy.get("#password").type("SSuperSecretPassword!");

  cy.get(".fa").click();

  cy.get("#flash").contains("Your password is invalid!");
});

it("An invalid username", () => {
  cy.visit("https://the-internet.herokuapp.com/");

  cy.get(":nth-child(21) > a").click();

  cy.get("#username").type("tomjames");

  cy.get("#password").type("SSuperSecretPassword!");

  cy.get(".fa").click();

  cy.get("#flash").contains("Your username is invalid!");
});

it("Trying to log in with empth input fields", () => {
  cy.visit("https://the-internet.herokuapp.com/");

  cy.get(":nth-child(21) > a").click();

  cy.get("#username").type("");

  cy.get("#password").type("");

  cy.get(".fa").click();

  cy.get("#flash").contains("Your username is invalid!");
});
