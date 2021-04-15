import createLogger from 'debug';
import { Client } from 'graphbrainz';

const debug = createLogger('graphbrainz-extension-spotify:client');

export default class SpotifyClient extends Client {
  constructor({
    clientID = process.env.SPOTIFY_CLIENT_ID,
    clientSecret = process.env.SPOTIFY_CLIENT_SECRET,
    baseURL = process.env.SPOTIFY_BASE_URL || 'https://api.spotify.com/v1/',
    limit = 10,
    period = 5000,
    ...options
  } = {}) {
    super({ baseURL, limit, period, ...options });
    this.clientID = clientID;
    this.clientSecret = clientSecret;
    this.accessToken = null;
    this.accessTokenExpiry = null;
  }

  async authorize() {
    const authString = `${this.clientID}:${this.clientSecret}`;
    const authHeader = `Basic ${Buffer.from(authString).toString('base64')}`;
    const options = {
      resolveBodyOnly: true,
      method: 'POST',
      form: {
        grant_type: 'client_credentials',
      },
      headers: {
        Authorization: authHeader,
      },
    };
    debug('Authorizing...');
    const response = await super.get(
      'https://accounts.spotify.com/api/token',
      options
    );
    if (!response.access_token) {
      throw new Error(`Authorization failed: ${response}`);
    }
    this.accessToken = response.access_token;
    this.accessTokenExpiry = new Date(Date.now() + response.expires_in * 1000);
    debug(
      `Received access token expiring at: ${this.accessTokenExpiry.toISOString()}`
    );
  }

  async get(path, options = {}) {
    if (!this.accessToken || this.accessTokenExpiry < new Date()) {
      await this.authorize();
    }
    options = {
      resolveBodyOnly: true,
      ...options,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        ...options.headers,
      },
    };
    return super.get(path, options);
  }

  async artists(ids) {
    const body = await this.get('artists', {
      searchParams: { ids: ids.join(',') },
    });
    return body.artists;
  }

  async albums(ids) {
    const body = await this.get('albums', {
      searchParams: { ids: ids.join(',') },
    });
    return body.albums;
  }

  async tracks(ids) {
    const body = await this.get('tracks', {
      searchParams: { ids: ids.join(',') },
    });
    return body.tracks;
  }

  async relatedArtists(id) {
    const body = await this.get(`artists/${id}/related-artists`);
    return body.artists;
  }

  async topTracks(id, params) {
    const body = await this.get(`artists/${id}/top-tracks`, {
      searchParams: params,
    });
    return body.tracks;
  }

  async audioFeatures(id) {
    const body = await this.get(`audio-features/${id}`);
    return body;
  }

  async search(type, params) {
    params = {
      ...params,
      type: { artists: 'artist', albums: 'album', tracks: 'track' }[type],
    };
    const body = await this.get('search', { searchParams: params });
    return body[type].items;
  }

  async recommendations(params) {
    const body = await this.get('recommendations', { searchParams: params });
    return body;
  }
}
