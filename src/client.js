import createLogger from 'debug'
import Client from 'graphbrainz/lib/api/client'

const debug = createLogger('graphbrainz-extension-spotify:client')

export default class SpotifyClient extends Client {
  constructor({
    clientID = process.env.SPOTIFY_CLIENT_ID,
    clientSecret = process.env.SPOTIFY_CLIENT_SECRET,
    baseURL = process.env.SPOTIFY_BASE_URL || 'https://api.spotify.com/v1/',
    limit = 10,
    period = 5000,
    ...options
  } = {}) {
    super({ baseURL, limit, period, ...options })
    this.clientID = clientID
    this.clientSecret = clientSecret
    this.accessToken = null
    this.accessTokenExpiry = null
  }

  shouldRetry(err) {
    if (err instanceof this.errorClass) {
      if (err.statusCode === 429) {
        return true
      }
    }
    return super.shouldRetry(err)
  }

  async authorize() {
    const authString = `${this.clientID}:${this.clientSecret}`
    const authHeader = `Basic ${Buffer.from(authString).toString('base64')}`
    const options = {
      baseUrl: 'https://accounts.spotify.com/api/',
      method: 'POST',
      json: true,
      form: {
        grant_type: 'client_credentials'
      },
      headers: {
        Authorization: authHeader
      }
    }
    debug('Authorizing...')
    const response = await super.get('token', options)
    if (!response.access_token) {
      throw new Error(`Authorization failed: ${response}`)
    }
    this.accessToken = response.access_token
    this.accessTokenExpiry = new Date(Date.now() + response.expires_in * 1000)
    debug(
      `Received access token expiring at: ${this.accessTokenExpiry.toISOString()}`
    )
  }

  async get(path, options = {}) {
    if (!this.accessToken || this.accessTokenExpiry < new Date()) {
      await this.authorize()
    }
    options = {
      json: true,
      ...options,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        ...options.headers
      }
    }
    return super.get(path, options)
  }

  async artists(ids) {
    const body = await this.get('artists', { qs: { ids: ids.join(',') } })
    return body.artists
  }

  async albums(ids) {
    const body = await this.get('albums', { qs: { ids: ids.join(',') } })
    return body.albums
  }

  async tracks(ids) {
    const body = await this.get('tracks', { qs: { ids: ids.join(',') } })
    return body.tracks
  }

  async relatedArtists(id) {
    const body = await this.get(`artists/${id}/related-artists`)
    return body.artists
  }
}
