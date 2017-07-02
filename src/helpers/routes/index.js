export const postPaths = (id = ':postId') => {
  if (id) return `/posts/${id}`;
  else return '/';
};
