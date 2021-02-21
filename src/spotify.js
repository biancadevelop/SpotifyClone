// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//where we send user to so they can login - using spotifys api for authentication
//clicking login takes me to this shopify endpoint
export const authEndpoint = "https://accounts.spotify.com/authorize";

//after logging in it redirects to home page once authorized/logged in
const redirectUri = "http://localhost:3000/";

const clientId = "2cb5a081de0546508de623e3a13e3d71";

//this spotify app has these scopes to be able to do these things
const scopes = [
  "user-read-playback-position",
  "user-read-email",
  "user-library-modify",
  "playlist-modify-public",
  "ugc-image-upload",
  "user-follow-modify",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "playlist-modify-private",
  "user-follow-read",
  "user-read-playback-state",
  "user-read-currently-playing",
  "playlist-read-private",
  "playlist-read-collaborative",
];

//pulling the access token from the url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// takes authendpoint then client id then redirect uri then scopes .join into an array and "%20" to give them space between then get a token and show dialog
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
