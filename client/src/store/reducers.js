import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_COURSES_SUCCESS,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_COURSE,
  GET_COURSE_SUCCESS
} from "./actions";

const initialState = {
  isAuthenticated: true,
  user: {},
  registerValidation: {},
  loginValidation: {},
  courses: [],
  course: {}
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        registerValidation: {},
        user: action.user
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerValidation: action.validation
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginValidation: {},
        isAuthenticated: true,
        user: action.user
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginValidation: action.validation
      };
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.courses
      };
    case GET_COURSE:
      return {
        ...state,
        course: {}
      };
    case GET_COURSE_SUCCESS:
      return {
        ...state,
        course: action.course
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
};

export default reducers;
