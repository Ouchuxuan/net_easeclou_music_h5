import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, SET_USERNAME } from './actionTypes';


export const getInputChangeAction = (value:any) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDelItemAction = (index:any) => ({
  type: DEL_TODO_ITEM,
  index
})

export const setUserName = (name:string) => ({
  type:SET_USERNAME,
  name,
})

type ret = ReturnType<typeof setUserName>
