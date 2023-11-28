import axios from "axios"
import store from "../store/index.js"
import router from "../router/index.js"

const sendRequest = (requestType, endpoint, authenticated, data = null, successCallback = null, errorCallback = null, arrayBufferHeader = false) => {
  
  var headers = null;
  
  if(authenticated) {
    headers = {
      headers: {
        authorization : "Bearer " + store.getters.authToken 
      }
    };
    if(arrayBufferHeader) {
      headers['responseType'] = 'arraybuffer'
    }
  }
  var requestObject = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
    patch: axios.patch
  };

  var url = process.env.VUE_APP_API_URL + endpoint;

  var request = null;
  if (data) {
    request = requestObject[requestType](url, data, headers);
  } else {
    request = requestObject[requestType](url, headers);
  }

  request
    .then(response => {
      if (successCallback) {
        successCallback(response);
      }
    })
    .catch(error => {
      if (errorCallback) {
        if(error.response.status == 401) {
          router.push({
            name: 'login'
          })
        }
        errorCallback(error);
      }
    })
  };
  export { sendRequest };
