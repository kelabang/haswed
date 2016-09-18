import types from __dirname + '/app/constant/action.types.js'

export function addStream(text) {
  return { type: types.ADD_STREAM, text }
}

export function getStream(id) {
  return { type: types.GET_STREAM, id }
}