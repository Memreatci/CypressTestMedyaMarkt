import SearchResultsFilter from "../components/searchResultsFilterPanel";
import SearchResultsSort from "../components/searchResultSortPanel";

class SearchResultsPage {

  LowestPriceSelector = '[data-filter="sort=sale_price:num:true"]';
  ProductVerify = '.mm-price';
  searchListResultSelector = 'div.mm-products';

  ResultsFilter() {
    SearchResultsFilter.ResultsFilterPanel();
  };

  ResultsFilterVerify () {
    SearchResultsFilter.ResultFilterVerified();
  };

  SortResults() {
    SearchResultsSort.sortPanel();
    // The price information of each product listed in the product list is accessed.
    cy.get(this.searchListResultSelector)
    .find('.product-box')
    .then((products) => {
      for (let i = 0; i < products.length - 1; i++) {
        const price1 = parseFloat(Cypress.$(products.eq(i)).find('.bottom').text().replace('TL', '').trim());
        const price2 = parseFloat(Cypress.$(products.eq(i + 1)).find('.bottom').text().replace('TL', '').trim());

       // expect(fiyat1).to.be.lte(fiyat2);  ===> largest to smallest order is verified.
       expect(price1).to.be.lte(price2);  //===> smallest to largest order is verified.
      }
    });
  };
};

module.exports = new SearchResultsPage();