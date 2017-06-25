export const postPaths = (id = ':id') => {
  if (id) return `/posts/${id}`;
  else return '/';
};
