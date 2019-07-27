export const getSearchFormState = state => state.searchForm;
export const getCardName = state => getSearchFormState(state).cardName;
export const getTypeLine = state => getSearchFormState(state).typeLine;
export const getCardText = state => getSearchFormState(state).cardText;
export const getBlack = state => getSearchFormState(state).black;
export const getWhite = state => getSearchFormState(state).white;
export const getRed = state => getSearchFormState(state).red;
export const getGreen = state => getSearchFormState(state).green;
export const getBlue = state => getSearchFormState(state).blue;
export const getExact = state => getSearchFormState(state).exact;
export const getExclude = state => getSearchFormState(state).exclude;
