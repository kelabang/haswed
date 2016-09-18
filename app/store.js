'use strict'

import thunk from 'redux-thunk'
import * as Reducers from "./reducer.js"

const reducerlisting = reduceReducers.apply(reduceReducers, Object.keys(Reducers).map((name) => {
  return Reducers[name]
}))
let store = Redux.applyMiddleware(thunk)(Redux.createStore)(reducerlisting)

export default store

function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current),
      previous
    )
}
