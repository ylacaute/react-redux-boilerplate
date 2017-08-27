

export default class RestException {

  constructor(httpResponse) {
    this.httpResponse = httpResponse;
  }

  getStatus() {
    return this.httpResponse.status;
  }

}
