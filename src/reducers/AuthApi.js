const initialState = {
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        auth: action.payload.auth,
      };
    default:
      return state;
  }
};

export default authReducer;
