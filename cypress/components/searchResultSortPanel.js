class  SearchResultsSortPanel {

  LowestPriceSelector = '[data-filter="sort=sale_price:num:false"]';
  
    sortPanel() {
      // click on the "en düşük fiyat" button
    cy.get(this.LowestPriceSelector).click();
    cy.wait(5000 );
    
    };
  };
  
  module.exports = new SearchResultsSortPanel(); 