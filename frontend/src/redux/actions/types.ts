enum ActionTypes {
  SET_ALERT = "SET_ALERT",
  REMOVE_ALERT = "REMOVE_ALERT",
  USER_LOADED = "USER_LOADED",
  USER_AUTH_ERROR = "USER_AUTH_ERROR",
  USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS",
  USER_REGISTER_FAIL = "USER_REGISTER_FAIL",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL = "USER_LOGIN_FAIL",
  USER_LOGOUT = "USER_LOGOUT",
  ADMIN_LOADED = "ADMIN_LOADED",
  ADMIN_AUTH_ERROR = "ADMIN_AUTH_ERROR",
  ADMIN_REGISTER_SUCCESS = "ADMIN_REGISTER_SUCCESS",
  ADMIN_REGISTER_FAIL = "ADMIN_REGISTER_FAIL",
  ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS",
  ADMIN_LOGIN_FAIL = "ADMIN_LOGIN_FAIL",
  ADMIN_LOGOUT = "ADMIN_LOGOUT",
  GET_USERS = "GET_USERS",
  UPDATE_USER = "UPDATE_USER",
  DELETE_USER = "DELETE_USER",
  GET_STOCKS = "GET_STOCKS",
  GET_STOCK_VALUES = "GET_STOCK_VALUES",
}

export default ActionTypes;
