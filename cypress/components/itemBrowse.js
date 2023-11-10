class itemBrowse {

    priceDetail = '.price-sidebar div.price-details';
    pictureDetail = '#product-sidebar';
    descriptionDetail = '.details';
    addToCartButton = 'div.price-sidebar div.price-button';

    itemBrowseVisbility() {
        // product page verification
        cy.get(this.priceDetail).should('be.visible');
      // cy.get(this.priceDetail, { timeout: 10000 }).should('be.visible');
        cy.get(this.pictureDetail).should('be.visible')
        cy.get(this.descriptionDetail).should('be.visible')
        cy.get(this.addToCartButton).should('be.visible')
    };
};

module.exports = new itemBrowse();