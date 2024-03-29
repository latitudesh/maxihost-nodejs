const User = require('./user/index.js');
const Members = require('./members/index.js');
const Roles = require('./roles/index.js');

class Teams {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/team';
  }

  current(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }

  update(teamId, data) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._patch(`${this.baseUrl}/${teamId}`, headers, data);
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl, headers, bodyData);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Teams = new Teams(Maxihost);
  Maxihost.prototype.Teams.User = new User(Maxihost);
  Maxihost.prototype.Teams.Members = new Members(Maxihost);
  Maxihost.prototype.Teams.Roles = new Roles(Maxihost);
};
