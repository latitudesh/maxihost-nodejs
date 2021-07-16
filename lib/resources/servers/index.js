const Bandwidth = require('./bandwidth/index.js');
const Ips = require('./ips/index.js');
const Actions = require('./actions/index.js');
const CustomScripts = require('./custom-scripts/index.js');
const DeployConfig = require('./deploy-config/index.js');
class Device {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  get(deviceId, searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.Maxihost._get(
      '/servers/' + deviceId,
      this.Maxihost._headers,
      searchParams
    );
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.Maxihost._get('/servers', this.Maxihost._headers, searchParams);
  }

  create(bodyData) {
    return this.Maxihost._post('/servers', this.Maxihost._headers, bodyData);
  }

  delete(deviceId) {
    return this.Maxihost._delete(
      '/servers/' + deviceId,
      this.Maxihost._headers
    );
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Server = new Device(Maxihost);
  Maxihost.prototype.Server.Bandwidth = new Bandwidth(Maxihost);
  Maxihost.prototype.Server.Ips = new Ips(Maxihost);
  Maxihost.prototype.Server.Actions = new Actions(Maxihost);
  Maxihost.prototype.Server.CustomScripts = new CustomScripts(Maxihost);
  Maxihost.prototype.Server.DeployConfig = new DeployConfig(Maxihost);
};