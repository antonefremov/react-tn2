import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/containers/BlogPage';
import Post from 'components/containers/Post';
//import NotFound from 'components/ui/NotFound';

const App = () => (
  <Router>
    <MainLayout>
      <Route exact path="/" component={BlogPage} />
      <Route path="/posts/:postId" component={Post} />
    </MainLayout>
  </Router>
);

export default App;
