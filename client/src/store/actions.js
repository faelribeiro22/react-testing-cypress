export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAIL = "AUTH/LOGIN_FAIL";
export const LOGOUT = "AUTH/LOGOUT";
export const REGISTER = "AUTH/REGISTER";
export const REGISTER_SUCCESS = "AUTH/REGISTER_SUCCESS";
export const REGISTER_FAIL = "AUTH/REGISTER_FAIL";
export const GET_COURSES = "GET_COURSES";
export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const GET_COURSES_FAIL = "GET_COURSES_FAIL";
export const GET_COURSE = "GET_COURSE";
export const GET_COURSE_SUCCESS = "GET_COURSE_SUCCESS";
export const GET_COURSE_FAIL = "GET_COURSE_FAIL";

export const onLogin = user => ({
  type: LOGIN,
  user
});

export const onRegister = user => ({
  type: REGISTER,
  user
});

export const onLogout = () => ({ type: LOGOUT });

export const onGetCourses = () => ({
  type: GET_COURSES
});

export const onGetCourse = id => ({
  type: GET_COURSE,
  id
});
