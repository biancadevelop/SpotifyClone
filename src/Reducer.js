export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //remove after finish developing
  // token:
  //   '"BQBCDpYv1FT7aMnkxdqQnVRXs44AZksH1aN3RgBr7e29g-3kBVmrcYxdKEeg1Moj9GQW3kRPYnfd8mc4hpm-vN6v5ob9S40jYfEKiWu0r789DwYTfyJVNvIWLn0S-9RQv7tvJra6wJ8VN78Aew50p3jrWHaQdQ"',
};
const reducer = (state, action) => {
  console.log(action);
  //action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
