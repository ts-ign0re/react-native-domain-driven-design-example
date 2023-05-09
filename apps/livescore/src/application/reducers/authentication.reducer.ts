const initialState = {
  isAuthenticated: false,
  token: null,
  username: null,
  email: null,
  password: null,
}
export function authentication(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return state;
    }

    case 'REGISTARTION_FINISHED': {
      return {
        ...state,
        isAuthenticated: true,
      };
    }

    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        isAuthenticated: false,
        token: action.payload.token,
        username: action.payload.user.username,
        email: action.payload.user.email,
        password: action.payload.user.password,
      }
    }

    case 'REGISTER_SUCCESS': {
      return {
        ...state,
        isAuthenticated: false,
        token: action.payload.token,
        username: action.payload.user.username,
        email: action.payload.user.email,
        password: action.payload.user.password,
      }
    }
    default: {
      return state;
    }
  }
}