/// <reference types="cypress" />

import { MainPage } from "../page-objects/main";
import { ShiftingPage } from "../page-objects/shifting";

describe("TEST DE LOGIN", () => {
  const mainPage = new MainPage();
  const shiftingPage = new ShiftingPage();

  beforeEach(() => {
    mainPage.navigate();
    shiftingPage.clickShiftingContent();
  });

  it("Shifting Content Menu Elemnt Count", () => {
    shiftingPage.clickMenuElement();
    shiftingPage.checkElement();
  });
});
