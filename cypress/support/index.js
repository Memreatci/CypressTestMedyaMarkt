Cypress.Commands.add('disableCORS', () => {
    cy.window().then((win) => {
      win.XMLHttpRequest = null;
    });
  });
  
  beforeEach(() => {
    cy.disableCORS();
  });