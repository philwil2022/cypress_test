/// <reference types="cypress" />

import { MainPage } from "../page-objects/main";
import { LoginPage } from "../page-objects/login";
import { WelcomePage } from "../page-objects/welcome";

describe("TEST DE LOGIN", () => {
  const loginPage = new LoginPage();
  const mainPage = new MainPage();
  const welcomePage = new WelcomePage();

  beforeEach(() => {
    mainPage.navigate();
    mainPage.clickLoginOption();
  });

  it("A valid user can login", () => {
    loginPage.fillUser("tomsmith");
    loginPage.fillPassword("SuperSecretPassword!");
    loginPage.clickButtonLogin();
    welcomePage.checkMessage("You logged into a secure area!");
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
