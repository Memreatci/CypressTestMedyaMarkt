import itemBrowse from '../components/itemBrowse'

class itemDetailsPage {

    browseItemSelector = '.mm-products  div.product-box-bottom div.info:first-child a';
    
    itemDetailsPage() {

        cy.get(this.browseItemSelector)
            .invoke('attr', 'href')
            .then(href => {
                cy.log(href);
                cy.visit(href);
            });

        itemBrowse.itemBrowseVisbility();
    };
};

module.exports = new itemDetailsPage();