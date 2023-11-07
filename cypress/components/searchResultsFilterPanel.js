class  SearchResultsFilterPanel {

  categorySelector = '[data-value="Bilgisayar"]';
  BrandSelector = '#brand0';
  ratingSelector = '#rating0';
  priceSelector = '#max';
  
  

  ResultsFilterPanel() {
    // various filter specifications are selected
    cy.get(this.categorySelector).click();
    cy.get(this.BrandSelector).click();
    cy.get(this.ratingSelector).click();
    cy.get(this.priceSelector)
    .clear()
    .type(5000);
  };

  ResultFilterVerified() {
    // It is verified that various filter specifications have been selected
    cy.get(this.categorySelector).should('have.class', 'mm-active-category');
    cy.get(this.BrandSelector).should('have.class', 'mm-active-filter');
    cy.get(this.ratingSelector).should('have.class', 'mm-active-filter');
    cy.get(this.priceSelector).should('have.value', '5000');
  }
};

module.exports = new SearchResultsFilterPanel(); 