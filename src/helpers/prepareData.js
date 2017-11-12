import { parse } from 'qs';
import { compact } from 'lodash/array';
import { map } from 'lodash/collection';

export default function(store, state) {
  const { location, params, routes } = state;

  const query = parse(location.search.substr(1));

  //debugger;
  console.log('prepareData location search ' + location.search);

  const prepareDataFns = compact(map(routes, route => route.prepareData));

  console.log('prepareData' + prepareDataFns[0]);

  map(
    prepareDataFns,
    prepareData => prepareData(store, query, params, location)
  );
}
