import { useReducer, useMemo, createContext, Dispatch, useContext } from 'react'
import ShowCount from './ShowCount'

type State = {
  count: number
}

const ActionType = {
  INCREMENT_COUNT: 'INCREMENT_COUNT',
  DECREMENT_COUNT: 'DECREMENT_COUNT'
} as const

type Action = {
  type: typeof ActionType[keyof typeof ActionType]
  payload? : number
}

const reducerFunc = ( state: State, action: Action ): State => {
  switch(action.type) {
    case 'INCREMENT_COUNT':
      return {
        count: state.count + 1
      }
      break
    
    case 'DECREMENT_COUNT':
      return {
        count: state.count - 2
      }
      break
    
    default:
      return state
  }
}

const initialState: State = {
  count: 0
}

export const CountContext = createContext(
  {} as { state: State; dispatch: Dispatch<Action> }
)

const Hooks: React.VFC = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState)

  const increment = () => {
    dispatch({ type: ActionType.INCREMENT_COUNT})
  }

  const decrement = () => {
    dispatch({ type: ActionType.DECREMENT_COUNT})
  }

  const btnStyle = {
    width: '60px',
    height: '30px',
    fontSize: '20px'
  }

  return (
    <div>
      <CountContext.Provider value={{state, dispatch}}>
        <h1>hooks</h1>
        <button type='button' style={{...btnStyle, marginLeft: '30px'}} onClick={increment}>
          +
        </button>
        <p>{state.count}</p>
        <button type='button' style={btnStyle} onClick={decrement}>
          -
        </button>
        <hr />
        <ShowCount />
      </CountContext.Provider>
    </div>
  )
}

export default Hooks
