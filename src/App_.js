import React, {Component} from 'react';
import { BrowserRouter as Router, matchPath, Switch } from 'react-router-dom';
import MainLayout from 'components/layouts/MainLayout';
// import BlogPage from 'components/containers/BlogPage';
// import Post from 'components/containers/Post';
//import { postPaths } from 'helpers/routes';
import store from 'store';
import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
import DevTools from 'containers/DevTools';
import prepareData from 'helpers/prepareData';
import history from 'routes/history';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
import createRoutes from 'routes';
import { assign } from 'lodash/object';
import { parse } from 'qs';

class App extends Component  {
  render() {
    const routes = createRoutes();
    console.log('routes: ' + routes.length);

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
