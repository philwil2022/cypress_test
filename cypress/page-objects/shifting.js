export class ShiftingPage {
  clickShiftingContent() {
    cy.get(":nth-child(39) > a").click();
  }

  clickMenuElement() {
    cy.get('[href="/shifting_content/menu"]').click();
  }

  checkElement() {
    cy.get("li").should("have.length", 5);
  }
}
