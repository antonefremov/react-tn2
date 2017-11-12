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
    routes.forEach(route => {
      console.log(route);
    });

    function historyCb(location) {
      const routeState = { location, params: {}, routes: [], query: {}};

      routes.some(route => {
        const match = matchPath(location.pathname, route);
        console.log(location.pathname);
        console.log(route);
        if (match) {
          console.log('there was a match' + match.params);
          routeState.routes.push(route);
          //debugger;
          assign(routeState.params, match.params);
          assign(routeState.query, parse(location.search.substr(1)));//locaiton.pathname?
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
