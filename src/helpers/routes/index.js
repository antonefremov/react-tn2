export const postPaths = (id) => {
  //debugger;
  console.log("postPaths() is called with id = " + id);
  if (id) return `/posts/${id}`;
  else return '/';
};

//export const postPaths = (id = ':id') => `/posts/${id}`;
// export const postsPath = () => '/';


//export const rootPath = () => '/';

// import setPostRoutes from 'routes/Posts';
//
// export default () => ([
//   //setPostRoutes().postRoute,
//   setPostRoutes().postsRoute
//   // setPagesRoutes().aboutPageRoute,
//   // setErrorsRoutes().error404Route
// ]
// );
