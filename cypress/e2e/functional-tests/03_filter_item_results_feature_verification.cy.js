import dataSearch from '../../fixtures/dataSearch.json';
import mainpage from '../../pages/mainPage';
import searchResult from '../../pages/searchResultPage';

describe('User should be able to filter search results: price, shop location, color', () => {

    it('should be able to filter search', () => {

        const searchQuery = dataSearch.searchQuery;

        mainpage.GoToWebsite();

        mainpage.PrivacyPolicySettingsAccept();

        mainpage.SearchBar(searchQuery);

        searchResult.ResultsFilter();

        searchResult.ResultsFilterVerify();

    });
});

