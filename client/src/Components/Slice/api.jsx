export const url = "http://localhost:9000";

export const setHeaders = () => {
  const headers = {
    headers: {
      "auth-token": localStorage.getItem("auth-token"),
    },
  };

  return headers;
};