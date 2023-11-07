import dataSearch from '../../fixtures/dataSearch.json';
import mainpage from '../../pages/mainPage';

describe('User should go to invalid search page in case of invalid query', () => {

  it('go to invalid search page in case of invalid query', () => {

    const searchQuery = dataSearch.invalidQuery;

    mainpage.GoToWebsite();

    mainpage.PrivacyPolicySettingsAccept();

    mainpage.SearchBar(searchQuery);

    mainpage.SearchBarInvalid(searchQuery);

  });
});
