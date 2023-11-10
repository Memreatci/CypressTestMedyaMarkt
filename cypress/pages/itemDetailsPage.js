import itemBrowse from '../components/itemBrowse'

class itemDetailsPage {

    browseItemSelector = '.mm-products .product-box:nth-child(1) div.info a ';

    itemDetailsPage() {

        cy.get(this.browseItemSelector)
            .invoke('attr', 'href')
            .then(href => {
                cy.log(href);
                cy.visit(href,{ failOnStatusCode: false });
            });

        itemBrowse.itemBrowseVisbility();
    };
};

module.exports = new itemDetailsPage();
