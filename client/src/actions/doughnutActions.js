import axios from 'axios';

const setDoughnut = summary =>
  ({
    type: 'REFRESH_DOUGHNUT',
    payload: summary
  });

const getDoughnut = () => (dispatch) => {
  axios.get('/api/process')
  .then(result =>
    dispatch(setDoughnut(result.data.aggregate))
  )
  .catch(error =>
    console.error('Failed to get doughnut: ', error) // eslint-disable-line no-console
  );
};

export default getDoughnut;
