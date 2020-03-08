import { SET_USERNAME } from "../actions/actionTypes";

const defaultState = {
  userName:'',
}
export type reduxState = typeof defaultState
type Action = {
  readonly type:string;
  [propname:string]:any;
}
// reducer可以接收state但是不能修改state
export default (state = defaultState, action:any) => {
  // if(action.type === CHANGE_INPUT_VALUE) {
  //   const newState = JSON.parse(JSON.stringify(state))
  //   newState.inputValue = action.value
  //   return newState
  // }
  // if(action.type === ADD_TODO_ITEM) {
  //   const newState = JSON.parse(JSON.stringify(state))
  //   newState.list.push(newState.inputValue)
  //   newState.inputValue = ''
  //   return newState
  // }
  // if(action.type === DEL_TODO_ITEM) {
  //   const newState = JSON.parse(JSON.stringify(state))
  //   newState.list.splice(action.index, 1)
  //   return newState
  // }
  switch (action.type) {
    case SET_USERNAME:
      const newState = action.name
      return newState;
    default:
      return state;
  }
}