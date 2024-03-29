const Profile = require('./profile/index.js');
const ApiKeys = require('./api-keys/index.js');

class User {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.User = new User(Maxihost);
  Maxihost.prototype.User.Profile = new Profile(Maxihost);
  Maxihost.prototype.User.ApiKeys = new ApiKeys(Maxihost);
};
