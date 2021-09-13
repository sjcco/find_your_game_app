const setAuthentication = auth => dispatch => {
  dispatch({
    type: 'SET_AUTH',
    payload: {
      auth,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { setAuthentication };
