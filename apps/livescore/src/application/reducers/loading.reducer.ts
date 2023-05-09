export function loading(state = false, action) {

  if (action.type.match(/persist/)) {
    console.log('persist', action);
  }

  if (action.type.match(/.*_SUCCESS/)) {
    return false;
  }

  if (action.type.match(/.*_FAILURE/)) {
    return false;
  }

  if (action.type.match(/.*_ERROR/)) {
    return false;
  }

  if (action.type.match(/.*_REQUEST/)) {
    return true;
  }

  return state;
}