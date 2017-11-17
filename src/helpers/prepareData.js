import { parse } from 'qs';
import { compact } from 'lodash/array';
import { map } from 'lodash/collection';

export default function(store, state) {
  const { location, params, routes } = state;
  const query = location.search ? parse(location.searh.substr(1)) : {};
  //debugger;
  //const query = parse(location.search.substr(1));
  const prepareDataFns = compact(map(routes, route => route.prepareData));

  map(
    prepareDataFns,
    prepareData => prepareData(store, state)//query, params, location
  );
}
