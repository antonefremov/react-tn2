import { compact } from 'lodash/array';
import { map } from 'lodash/collection';

export default function(store, state) {
  const { routes } = state;
  const prepareDataFns = compact(map(routes, route => route.prepareData));

  map(
    prepareDataFns,
    prepareData => prepareData(store, state)
  );
}
