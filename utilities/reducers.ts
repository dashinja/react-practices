export type CountActionType = {
  type: 'changed_input' | '+1' | '-1'
  value: number
}

export const InitialActionType: CountActionType = {
  type: '+1',
  value: 0
}

export function countReducer(state: CountActionType, action: CountActionType): CountActionType {
  console.log('count reducer called')
  console.log('action: ', action)
  switch(action.type) {
    case 'changed_input':
      return {
        ...state,
       value: action.value
      } 

    case '+1':
      return {
        ...state,
        value: state.value + 1
      }

    case '-1':
      return {
        ...state,
        value: state.value - 1
      }

    default:
      console.error('Unknown action type')
      return state
  }
}

export type SubmitStateType = {
  type: 'submitted'
  newValue: number
  arrayValue: number[]
}

export const InitialSubmitState = {
  type: 'submitted', 
  arrayValue: [], 
  newValue: 0
} as SubmitStateType

export const submitReducer = (state: SubmitStateType, action: SubmitStateType) => {
  switch (action.type) {
    case 'submitted':
      console.log('state in submitReducer: ', state)
      console.log('submitReducer state.newValue: ', state.newValue)
      console.log('what is this: ', [...state.arrayValue, state.newValue])
      return {
        ...state,
      arrayValue: [...state.arrayValue, action.newValue]
      } as unknown as SubmitStateType
  
    default:
      console.error('Unknown action type')
      return state
  }
}