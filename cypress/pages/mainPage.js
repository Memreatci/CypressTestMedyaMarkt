import SearchField from "../components/searchField";

class MainPage {

  PrivacyPolicySettingsSelector = '.cookie-info-accept-button.js-cookie-info-accept-button.button';
  
  GoToWebsite() {
    cy.visit('https://www.mediamarkt.com.tr/');
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