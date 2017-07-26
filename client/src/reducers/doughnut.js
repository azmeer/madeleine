const doughnut = (state = [], action) => {
  switch (action.type) {
    case 'REFRESH_DOUGHNUT':
      return action.payload;
    default: return state;
  }
};

export default doughnut;
