# maxihost-nodejs

Nodejs Package to use Maxihost API. Check our [API documentation](https://developers.maxihost.com/v2.0/reference)

# Instalation

`npm install maxihost-nodejs`

# Usage

```javascript

const Maxihost  = require('maxihost-nodejs');
maxihostApi = new Maxihost(<APITOKEN>);

// Async Await

const profile = (async () => {
  await maxihostApi.Profile.get()
})

// Promise then

maxihostApi.Profile.get().then((response) => {
  // success
}, (response) => {
  // failure
})

```

# Available API Methods

- `Profile.get` [Reference](https://developers.maxihost.com/v2.0/reference#get-user-profile)
- `Projects.list` [Reference](https://developers.maxihost.com/v2.0/reference#get-projects)
- `Projects.get`. Params: `(projectId)`. [Reference](https://developers.maxihost.com/v2.0/reference#retrieve-project)
- `Projects.Ips.list`. Params: `(projectId)`. [Reference](https://developers.maxihost.com/v2.0/reference#get-project-ips)
- `Projects.Members.list`. Params: `(projectId)`. [Reference](https://developers.maxihost.com/v2.0/reference#get-project-members)
- `Projects.Servers.list`. Params: `(projectId)`. [Reference](https://developers.maxihost.com/v2.0/reference#get-project-servers)
- `Projects.Servers.get`. Params: `(projectId, serverId)`. [Reference](https://developers.maxihost.com/v2.0/reference#get-project-server)
- `Regions.list` [Reference](https://developers.maxihost.com/v2.0/reference#get-regions)
- `Regions.get`. Params: `regionId`. [Reference](https://developers.maxihost.com/v2.0/reference#get-region-id)
- `Teams.current` [Reference](https://developers.maxihost.com/v2.0/reference#get-team)
- `Teams.User.listTeams` [Reference](https://developers.maxihost.com/v2.0/reference#get-user-teams)
