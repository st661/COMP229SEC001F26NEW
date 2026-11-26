describe("mernSEC001", () => {
  it("tests mernSEC001", () => {
    cy.viewport(708, 633);
    cy.visit("http://localhost:3000/");
    cy.get("a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(3) > button").click();
    cy.get("a:nth-of-type(5) > button").click();
    cy.get("#email").type("victory@yahoo.com");
    cy.get("#password").type("victory");
    cy.get("a:nth-of-type(6) > button").click();
    cy.get("#email").type("victory@yahoo.com");
    cy.get("#password").type("victory");
    cy.get("#root > div > div button").click();
    cy.get("a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(1) h2").click();
    cy.get("#root > div > div > div.MuiGrid-root > div:nth-of-type(1) svg").click();
    cy.get("#root > div > div a:nth-of-type(2) > button").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLBMBNBOBPBQB
