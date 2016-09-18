const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

let configurationAction = {}

const StreamReducer = ReduxAct.createReducer(configurationAction)

export default StreamReducer 