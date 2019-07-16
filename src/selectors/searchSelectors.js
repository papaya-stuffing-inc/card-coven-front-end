export const getSearchState = state => state.searches;
export const getSearchResults = state => getSearchState(state).results;
export const getSearchCurrentPage = state => getSearchState(state).currentPage;
export const getSearchTotalPages = state => getSearchState(state).totalPages;
export const getSearchPerPage = state => getSearchState(state).perPage;
export const getSearchHasResults = state => getSearchState(state).hasResults;
export const getSearchDisplaying = state => getSearchState(state).displaying;
export const getSearchHasMore = state => getSearchState(state).hasMore;
export const getSearchHasLess = state => getSearchState(state).hasLess;
export const getSearchTotalCount = state => getSearchState(state).totalCount;
export const getSearchLoading = state => getSearchState(state).loading;
export const getSearchFulfilled = state => getSearchState(state).fulfilled;
export const getSearchNoSearches = state => getSearchState(state).noSearches;
export const getSearchError = state => getSearchState(state).error;

