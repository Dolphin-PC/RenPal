export default function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
