export const postPaths = (id) => {
  if (id) return `/posts/${id}`;
  else return '/';
};
