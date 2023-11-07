import dataSearch from '../../fixtures/dataSearch.json';
import mainpage from '../../pages/mainPage';

describe('User should search for an item and get appropriate results: items in result list should have query in the titles', () => {

  it('should display appropriate results for the query', () => {

    const searchQuery = dataSearch.searchQuery;
    
    mainpage.GoToWebsite();

    mainpage.PrivacyPolicySettingsAccept();

    mainpage.SearchBar(searchQuery);

    itemdeatil.itemDetailsPage();


  });
});
