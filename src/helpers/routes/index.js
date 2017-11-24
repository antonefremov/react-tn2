export const postPaths = (id) => {
  if (id) return `${id}`;//`/posts/${id}`;
  else return '/';
};
