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
    loginPage.fillUser("tomsmith");
    loginPage.fillPassword("SSuperSecretPassword!");
    loginPage.clickButtonLogin();
    welcomePage.checkMessage("Your password is invalid!");
  });

  it("An invalid username", () => {
    loginPage.fillUser("tomjames");
    loginPage.fillPassword("SSuperSecretPassword!");
    loginPage.clickButtonLogin();
    welcomePage.checkMessage("Your username is invalid!");
  });

  it("Trying to log in with empty input fields", () => {
    loginPage.clearUserField();
    loginPage.clearPasswordField();
    loginPage.clickButtonLogin();
    welcomePage.checkMessage("Your username is invalid!");
  });
});
