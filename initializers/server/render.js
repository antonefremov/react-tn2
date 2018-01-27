import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, Switch } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { assign, compact } from 'lodash';
import createRoutes from 'routes';
import createStore from 'store';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
import prepareData from 'helpers/prepareData';

export default (req, res) => {
  const store = createStore();
  const routes = createRoutes();
  const matchedRoutes = matchRoutes(routes, req.path);
  const state = { params: {}, routes: matchedRoutes[0], query: {},
    location: { pathname: req.path } };

  matchedRoutes.forEach(route => {
    assign(state.params, route.match.params);
  });

  assign(state.query, req.query);
  const promises = prepareData(store, state);
  Promise.all(compact(promises))
    .then(() => {
      const initialState = JSON.stringify(store.getState());
      const content = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.path} context={state}>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </StaticRouter>
        </Provider>
      );
      const head = Helmet.rewind();
      res.status(200);
      res.render('index', {
        initialState,
        content,
        head
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
