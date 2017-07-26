import axios from 'axios';

const setMomentList = momentList =>
  ({
    type: 'REFRESH_MOMENTS',
    payload: momentList
  });

const getMomentList = () => (dispatch) => {
  axios.get('/api/news')
  .then(result =>
    dispatch(setMomentList(result.data))
  )
  .catch(error =>
    console.error('Failed to fetch news: ', error) // eslint-disable-line no-console
  );
};

export default getMomentList;
