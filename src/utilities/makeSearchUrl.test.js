import { makeSearchUrl, colorsToString } from './makeSearchUrl';

const initialSearchState = {
  cardName: '',
  colors: {
    black: false,
    white: false,
    green: false,
    red: false,
    blue: false,
  },
  exact: false,
  exclude: false,
  colorIdentity: false,
  formats: [],
  selectedSets: [],
  cardText: '',
  typeLine: '',
  layout: '',
  sortFilters: [],
  reprintedAllowed: false
};


const allColors = {
  colors: {
    black: true,
    white: true,
    green: true,
    red: true,
    blue: true,
  }
};

const noColors = {
  colors: {
    black: false,
    white: false,
    green: false,
    red: false,
    blue: false,
  }
};

const someColors = {
  colors: {
    black: true,
    white: false,
    green: true,
    red: false,
    blue: true,
  }
};

const oneColor = {
  colors: {
    black: true,
    white: false,
    green: false,
    red: false,
    blue: false,
  }
};


describe('make search url test', () => {
  it('returns a basic card search url on default submission', () => {
    expect(makeSearchUrl(initialSearchState).toString()).toEqual('http://localhost:7891/api/v1/cards');
  });
  it('returns a search url for a color query', () => {
    expect(makeSearchUrl({ ...initialSearchState, ...allColors, exact: false, exclude: false }).toString()).toEqual('http://localhost:7891/api/v1/cards?colors=B%2CW%2CR%2CG%2CU&exact=no&exclude=no');
  });
  it('returns a url with a color Identity query', () => {
    expect(makeSearchUrl({ ...initialSearchState, ...allColors, exact: true, exclude: true, colorIdentity: true }).toString()).toEqual('http://localhost:7891/api/v1/cards?color_identity=B%2CW%2CR%2CG%2CU&exact=yes&exclude=yes');
  });
  it('returns a url with a type_line query', () => {
    expect(makeSearchUrl({ ...initialSearchState, typeLine: 'legendary vampire' }).toString()).toEqual('http://localhost:7891/api/v1/cards?type_line=legendary+vampire');
  });
  it('returns a url with a card text query', () => {
    expect(makeSearchUrl({ ...initialSearchState, cardText: 'destroy' }).toString()).toEqual('http://localhost:7891/api/v1/cards?oracle_text=destroy');
  });
  it('returns a url with a format query', () => {
    expect(makeSearchUrl({ ...initialSearchState, formats: ['standard', 'commander'] }).toString()).toEqual('http://localhost:7891/api/v1/cards?formats=standard%2Ccommander');
  });
  it('returns a url with a sets query', () => {
    expect(makeSearchUrl({ ...initialSearchState, selectedSets: ['Core 2020', 'Khans of Tarkir'] }).toString()).toEqual('http://localhost:7891/api/v1/cards?sets=Core+2020%2CKhans+of+Tarkir');
  });
  it('returns a url with a layout query', () => {
    expect(makeSearchUrl({ ...initialSearchState, layout: 'transform' }).toString()).toEqual('http://localhost:7891/api/v1/cards?layout=transform');
  });
  it('returns a url with a sets query', () => {
    const sortFilters = [
      {
        filter: 'cmc/Converted Mana Cost',
        direction: '-1'
      },
      {
        filter: 'prices/Cost ($USD)',
        direction: '1'
      }
    ];
    expect(makeSearchUrl({ ...initialSearchState, sortFilters }).toString()).toEqual('http://localhost:7891/api/v1/cards?sort=cmc%2C-1%7Cprices%2C1');
  });
});

describe('colorToString test', () => {

  it('returns all colors separated by commas', () => {
    expect(colorsToString(allColors.colors)).toEqual('B,W,R,G,U');
  });
  it('returns empty string if all colors are false', () => {
    expect(colorsToString(noColors.colors)).toEqual('');
  });
  it('excludes false colors', () => {
    expect(colorsToString(someColors.colors)).toEqual('B,G,U');
  });
  it('works with one color', () => {
    expect(colorsToString(oneColor.colors)).toEqual('B');
  });
});
