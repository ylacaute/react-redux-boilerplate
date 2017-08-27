
import RestException from 'client/RestException';

let defaultHeaders = new Headers();
defaultHeaders.append('Accept', 'application/json');
defaultHeaders.append('Content-Type', 'application/json');


let jsonFetch = (path, options, callback, errorCallback) => {
  console.log("[REQUEST]", options.verb, path);
  let url = window.location.origin + path;
  fetch(url, {
    headers: defaultHeaders,
    ...options
  })
  .then(response => {
    console.log("[RESPONSE", response.status + "]", options.verb, path);
    if (!response.ok) {
      throw new RestException(response);
    }
    return response;
  })
  .then(response => response.json())
  .then(callback)
  .catch(error => {
    if (errorCallback !== null) {
      errorCallback(error);
    }
  });
};

export default class RestClient {

  static get = (path, callback, errorCallback) => {
    let options = {
      verb: 'GET',
    };
    jsonFetch(path, options, callback, errorCallback);
  };

  static post = (path, payload, callback, errorCallback) => {
    let options = {
      verb: 'GET',
      body: JSON.stringify(payload)
    };
    jsonFetch(path, options, callback, errorCallback);
  };

}
