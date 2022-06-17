import { useContext, createContext, useState, useEffect,useReducer, useMemo, useCallback, Children } from "react"

type State = {
    count: number
}

const ActionType = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
} as const

type Action = {
    type: typeof ActionType[keyof typeof ActionType]
}

const reducer = (state: State, action: Action) => {
    switch(action.type) {
        case ActionType.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case ActionType.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

const initialStateFactory = (initialState?: State): State => {
    return {
        count: 0,
        ...initialState
    }
}

const AppContext = createContext({} as {
    state: State,
    increment: () => void,
    decrement: () => void
})

const useCounter = (initialState?: State) => {
    const [state, dispatch] = useReducer(
        reducer,
        initialStateFactory(initialState)
    )


    const increment = () => {
        dispatch({type: ActionType.INCREMENT})
    }

    const decrement = () => {
        dispatch({type: ActionType.DECREMENT})
    }

    return {
        state,
        increment,
        decrement
    } as const
}

const AnotherHooks = () => {
    const { state, increment, decrement } = useCounter({ count: 3 })

    return (
        <>
            <p>ここから孫コンポーネント</p>
            <p>{state.count}</p>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
            <p>ここまで</p>
        </>
    )
}

const AppContextProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const { state, increment, decrement } = useCounter()

    const value = useMemo(
        () => ({
            state,
            increment,
            decrement
        }),
        [state]
    )

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
}

const Hooks = () => {
    //以下 使用不可
    const context = useCounter()
    const { increment, decrement } = context

    return (
        <div>
            <p>この親コンポーネントからは参照できない</p>
            <p>Provider以下の別のコンポーネントからのみ参照可能</p>
            <button onClick={() => increment()}>
                親からプラス1
            </button>
            <button onClick={() => decrement()}>
                親からマイナス
            </button>
            <AppContextProvider >
                <AnotherHooks />
            </AppContextProvider>
        </div>
    )
} 

export default Hooks
