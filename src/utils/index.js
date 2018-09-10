import url from 'url'

export const host = process.env.REACT_APP_DIRECTUS_HOST

/**
 * Generic fetch to make api calls
 * @param {string} protocol - 'http' or 'https'
 * @param {string} hostname - example: 'host.com'
 * @param {string} pathname - example: '/p/a/t/h'
 * @param {object} query - example: {'query':'string'}
 * @param {object} args - headers
 */
export function apiFetchGeneric (protocol, hostname, pathname, query, ...args) {
  const uri = url.format({ protocol, hostname, pathname, query })

  return fetch(uri, ...args)
    .then((response) => response.json())
    .catch((error) => { throw error })
}

/**
 * Fetch relative to site domain to make api calls *internally*
 * @param {*} pathname - example: '/p/a/t/h'
 * @param {*} query - example: {'query':'string'}
 * @param {*} args - headers
 */
export function apiFetch (pathname, query, ...args) {
  const path = url.format({ pathname, query })

  return fetch(path, ...args)
    .then(response => response.json())
    .catch((error) => { throw error })
}

export function apiImageUrlGeneric (obj, imageurl) {
  return obj.protocol + '//' + obj.hostname + imageurl
}

export function apiImageUrl (imageurl) {
  return 'http://' + host + imageurl
}
