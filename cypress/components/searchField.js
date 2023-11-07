class SearchField {

   searchForFieldSelector = '[name="query"]';
   searchListResultContainerQuerySelector = 'div.product-box';
   searchForInvalidQuerySelector = '#no-results-background-Defs1002';
   afterSearchCookiesSelector = '.btn';
   searchButtonSelector = '[data-identifier="searchButton"]';

    searchFor(searchQuery) {
        // Clear the search textbox and enter the current query.
        cy.get(this.searchForFieldSelector)
        .clear()
        .type(searchQuery).wait(2000);
        // Close the after search cookies selector.
        cy.get(this.afterSearchCookiesSelector).click().wait(2000);
        // Cllicked the search button
        cy.get(this.searchButtonSelector).click({ multiple: true });
    };

    searchListResultsContainQuery(searchQuery) {
        // Verify whether each element contains a specific text.
        cy.get(this.searchListResultContainerQuerySelector)
        .each((item) => {
             cy.wrap(item)
             .contains(searchQuery); 
              });
    };

    searchForInvalidQuery() {
        cy.title().should('eq','MediaMarkt Kampanyaları ve İndirimleri | MediaMarkt');
    };
};

module.exports = new SearchField();