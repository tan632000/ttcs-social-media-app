const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    case "UPDATE_USER_SUCCESS": {
      // console.log("aaa", action.payload);
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
      };
    }
    case "UPDATE_USER_FAIL": {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
