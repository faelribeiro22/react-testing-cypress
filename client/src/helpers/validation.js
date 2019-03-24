const validation = {
  isNullOrEmpty: value => {
    return !value || value.trim() === "";
  },

  minLength: (value, min) => {
    return value.length <= min;
  },

  getMessageFromError: error => {
    if (error) {
      if (error.response && error.response.data) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }

    return "";
  }
};

export default validation;
