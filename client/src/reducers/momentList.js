const momentList = (state = [], action) => {
  switch (action.type) {
    case 'REFRESH_MOMENTS':
      return action.payload;
    default: return state;
  }
};

export default momentList;
