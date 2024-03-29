class ApiVersion {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/auth";
  }

  get() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/current_version`, headers);
  }

  update(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._patch(`${this.baseUrl}/update_version`, headers, bodyData);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.ApiVersion = new ApiVersion(Maxihost);
};
