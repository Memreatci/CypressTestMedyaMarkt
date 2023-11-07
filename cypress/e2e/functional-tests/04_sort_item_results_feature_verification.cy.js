import dataSearch from '../../fixtures/dataSearch.json';
import mainpage from '../../pages/mainPage';
import searchResult from '../../pages/searchResultPage';

describe('User should be able to sort a search results: lowest and highest price', () => {

    it('should be able to sort a search results', () => {

        const searchQuery = dataSearch.searchQuery;

        mainpage.GoToWebsite();

        mainpage.PrivacyPolicySettingsAccept();

        mainpage.SearchBar(searchQuery);

        searchResult.SortResults();

    });
});




