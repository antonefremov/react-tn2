import React, {Component} from 'react';
import { Router, matchPath, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainLayout from 'components/layouts/MainLayout';
import store from 'store';
import { Provider } from 'react-redux';
import DevTools from 'components/containers/DevTools';
import prepareData from 'helpers/prepareData';
import history from 'helpers/history';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
import createRoutes from 'routes';
import { assign } from 'lodash/object';
import { parse } from 'qs';

const routes = createRoutes();

function historyCb(location) {
  const routeState = { location, params: {}, routes: [], query: {}};

  routes.some(route => {
    const match = matchPath(location.pathname, route);
    if (match) {
      routeState.routes.push(route);
      assign(routeState.params, match.params);
      assign(routeState.query, parse(location.search.substr(1)));
    }

    return match;
  });

  prepareData(store, routeState);
}

history.listen(historyCb);
historyCb(window.location);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MainLayout>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </Switch>
            <DevTools store={store}/>
          </MainLayout>
        </Router>
      </Provider>
    );
  }
}

export default App;

App.propTypes = {
  match: PropTypes.string
};
