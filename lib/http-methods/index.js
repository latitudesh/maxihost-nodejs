const got = require('got');
require('dotenv').config();

const handleError = err => {
  if (err.response && err.response.body) {
    const body = JSON.parse(err.response.body);
    const error = {
      status: err.response.statusCode,
      body: JSON.parse(JSON.stringify(body.errors)),
    };
    return error;
  } else {
    return JSON.parse({ status: 500, body: `Internal Error: ${err}` });
  }
};

const setAuthHeaders = (apiKey, origin) => {
  let headers = {
    Authorization: 'Bearer ' + apiKey,
    'Content-Type': 'application/json',
    Accept: 'application/vnd.maxihost.v2+json',
  }

  if (origin) {
    headers['Origin'] = origin;
  }

  return headers
};

const setHttpMethods = (Maxihost, apiKey, origin) => {
  Maxihost._headers = setAuthHeaders(apiKey, origin);
  Maxihost._get = getRequest;
  Maxihost._patch = patchRequest;
  Maxihost._put = putRequest;
  Maxihost._post = postRequest;
  Maxihost._delete = deleteRequest;
};

const getRequest = async (path, headers, searchParams = '') => {
  try {
    const response = await got.get(buildUrl(path, '?' + searchParams), {
      headers,
    });
    return JSON.parse(response.body);
  } catch (err) {
    return handleError(err);
  }
};

const postRequest = async (path, headers, data) => {
  try {
    const response = await got.post(buildUrl(path), {
      headers: headers,
      json: data,
    });
    return JSON.parse(response.body);
  } catch (err) {
    return handleError(err);
  }
};

const patchRequest = async (path, headers, data) => {
  try {
    const response = await got.patch(buildUrl(path), {
      headers,
      json: data,
    });
    if (response && response.body) {
      return JSON.parse(response.body);
    }
    return { status: 'ok' };
  } catch (err) {
    return handleError(err);
  }
};

const putRequest = async (path, headers, data) => {
  try {
    const response = await got.put(buildUrl(path), {
      headers,
      json: data,
    });
    if (response && response.body) {
      return JSON.parse(response.body);
    }
    return { status: 'ok' };
  } catch (err) {
    return handleError(err);
  }
};

const deleteRequest = async (path, headers) => {
  try {
    const response = await got.delete(buildUrl(path), { headers });
    if (response && response.body) {
      return JSON.parse(response.body);
    }
    return { status: 'ok' };
  } catch (err) {
    return handleError(err);
  }
};

const buildUrl = (path, searchParams = '') => {
  const url = process.env.MAXIHOST_API_DOMAIN || 'https://api.maxihost.com';
  return url + path + searchParams;
};

exports.setHttpMethods = setHttpMethods;
exports.setAuthHeaders = setAuthHeaders;
exports.getRequest = getRequest;
exports.postRequest = postRequest;
exports.putRequest = putRequest;
exports.patchRequest = patchRequest;
exports.setAuthHeaders = deleteRequest;
