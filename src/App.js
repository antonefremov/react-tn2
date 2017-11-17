import React, {Component} from 'react';
import { BrowserRouter as Router, matchPath, Switch } from 'react-router-dom';
//import { withRouter } from 'react-router';
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

const routes = createRoutes();

function historyCb(location) {
  const routeState = { location, params: {}, routes: [], query: {}};

  // routes.some(route => {
  //   const match = matchPath(location.pathname, route);
  //   console.log(location.pathname);
  //   console.log(route);
  //   if (match) {
  //     console.log('there was a match' + match.path);
  //     //match.params.id = 'posts/1';
  //     debugger;
  //     routeState.routes.push(route);
  //     //debugger;
  //     match.params.id = match.path;
  //     assign(routeState.params, match.params);
  //     assign(routeState.query, parse(location.search.substr(1)));
  //   }
  //
  //   return match;
  // });

  routes.some(route => {
    const match = matchPath(location.pathname, route);
    //debugger;
    if (match) {
      routeState.routes.push(route);
      match.params.id = match.path;
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
  // componentWillMount() {
  //   history.listen(historyCb);
  //   historyCb(window.location);
  // }

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
