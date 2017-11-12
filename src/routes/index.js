// import Blog from './Blog';
//
// export default {
//   childRoutes: [Blog]
// };

import PostsRoute from 'routes/Posts';
import PostRoute from 'routes/Post';

export default () => ([
  PostsRoute,
  PostRoute
  //setPostRoutes().postRoute,
  //setPostRoutes().postsRoute
  // setPagesRoutes().aboutPageRoute,
  // setErrorsRoutes().error404Route
]);
