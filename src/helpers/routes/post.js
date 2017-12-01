const postUrl = (postId = ':postId') => `/posts/${postId}`;

const postPath = (id) => `${id}`;

export { postPath, postUrl };
