export default (count = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_LIKE':
      return count + 1;
  }

  return count;
};
