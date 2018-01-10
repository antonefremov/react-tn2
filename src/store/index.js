import { createStore, applyMiddleware, compose } from 'redux';
import APIMiddleware from 'middleware/API';
import reducers from 'reducers';
import DevTools from 'components/containers/DevTools';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
