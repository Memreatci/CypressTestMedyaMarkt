import SearchField from "../components/searchField";

class MainPage {

  host = 'https://www.mediamarkt.com.tr/';
  PrivacyPolicySettingsSelector = '.cookie-info-accept-button.js-cookie-info-accept-button.button';
  
  GoToWebsite() {
    cy.visit(this.host);
  };

  PrivacyPolicySettingsAccept() {
    cy.get(this.PrivacyPolicySettingsSelector).click();
  };

  SearchBar(searchQuery) {
    SearchField.searchFor(searchQuery);
  };

  SearchBarResultCheck(searchQuery) {
    SearchField.searchListResultsContainQuery(searchQuery);
  };

  SearchBarInvalid(searchQuery) {
    SearchField.searchForInvalidQuery(searchQuery);
  };
};

module.exports = new MainPage();