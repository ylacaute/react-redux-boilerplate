
let headers = new Headers();

headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');


function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

class RestClient {

  static get = (path, callback, errorCallback) => {
    let url = window.location.origin + path;
    console.log("[REQUEST] GET ", path);
    fetch(url, {
      method: 'GET',
      headers: headers,
    }).then(handleErrors)
      .then(response => response.json())
      .then(json => {
        console.log("[RESPONSE] GET ", path);
        callback(json)
      })
      .catch(error => {
        if (errorCallback != null) {
          errorCallback(error);
        }
      });
  };

  static post = (path, payload, callback, errorCallback) => {
    let url = window.location.origin + path;
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    }).then(handleErrors)
      .then(response => response.json())
      .then(json => callback(json))
      .catch(error => {
        if (errorCallback != null) {
          errorCallback(error);
        }
      });
  };

}

export default RestClient;
